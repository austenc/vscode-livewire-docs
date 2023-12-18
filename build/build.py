import re
import json
from os.path import abspath, join, dirname
import urllib.request
from shutil import copyfile

v2Url = 'https://laravel-livewire.com/docs/'
v3Url = 'https://livewire.laravel.com/docs/'

# Create a request with a valid User-Agent
v2Request = urllib.request.Request(
    v2Url,
    data=None,
    headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/35.0.1916.47 Safari/537.36'
    }
)

v3Request = urllib.request.Request(
    v3Url,
    data=None,
    headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/35.0.1916.47 Safari/537.36'
    }
)

# Pull the html from the main docs page and find all /docs links
v2Docs = urllib.request.urlopen(v2Request)
v3Docs = urllib.request.urlopen(v3Request)
v2Links = re.findall('href="(/docs/2.x/.*?)"', v2Docs.read().decode('utf-8'))
v3Links = re.findall('href="(/docs/.*?)"', v3Docs.read().decode('utf-8'))
v2Found = []
v3Found = []
v2Pages = []
v3Pages = []


# Compile all the info for the pages
for url in sorted(set(v2Links)):
    topic = url.split('/')[3].title().replace('-', ' ').split('#')[0]
    slug = url.split('/')[3].split('#')[0]

    if (topic not in v2Found):
        v2Found.append(topic)
        v2Pages.append({
            "topic": topic,
            "slug": slug,
            "command": "livewireDocsV2" + slug.replace('-', ' ').title().replace(' ', '')
        })



for url in sorted(set(v3Links)):
    topic = url.split('/')[2].title().replace('-', ' ').split('#')[0]
    slug = url.split('/')[2].split('#')[0]

    if (topic not in v3Found and topic != ''):
        v3Found.append(topic)
        v3Pages.append({
            "topic": topic,
            "slug": slug,
            "command": "livewireDocsV3" + slug.replace('-', ' ').title().replace(' ', '')
        })

# print(pages)

# Generate command definitions in package.json
with open(join(abspath(dirname(__file__)), '../package.json'), 'r') as f:
    data = json.load(f)
    data['contributes']['commands'] = []
    data['activationEvents'] = []

    for page in v2Pages:
        data['activationEvents'].append(
            "onCommand:extension." + page['command'])
        data['contributes']['commands'].append({
            "command": "extension.{}".format(page['command']),
            "category": "Livewire Docs",
            "enablement": "configuration.livewireDocs.version == '2.x' || configuration.livewireDocs.version == 2",
            "title": page['topic'],
        })
    for page in v3Pages:
        data['activationEvents'].append(
            "onCommand:extension." + page['command'])
        data['contributes']['commands'].append({
            "command": "extension.{}".format(page['command']),
            "enablement": "configuration.livewireDocs.version != '2.x' || configuration.livewireDocs.version != 2",
            "category": "Livewire Docs",
            "title": page['topic'],
        })


with open(join(abspath(dirname(__file__)), '../package.json'), 'w') as f:
    json.dump(data, f, indent=4)

# Generate the extension.ts file
with open(join(abspath(dirname(__file__)), '../src/extension.ts'), 'w+') as f:
    f.write("'use strict';\n")
    f.write("import { workspace, commands, Uri, ExtensionContext } from 'vscode'\n\n")
    f.write("export function activate(context: ExtensionContext) {\n\n")
    f.write('    let version = workspace.getConfiguration("livewireDocs").version;' + "\n")
    f.write("    let baseUrl = version == '2.x' ? `https://laravel-livewire.com/docs/2.x/` : 'https://livewire.laravel.com/docs/';\n\n");

    for page in v2Pages:
        f.write(
            '    let ' + page['command'] + ' = ' +
            'commands.registerCommand('
            + "'extension." + page['command'] + "', () => {\n"
            + "        commands.executeCommand('vscode.open', "
            + "Uri.parse(baseUrl + '" + page['slug'] + "'));\n"
            + "    });\n"
            + "    context.subscriptions.push(" + page['command'] + ");\n"
        )

    for page in v3Pages:
        f.write(
            '    let ' + page['command'] + ' = ' +
            'commands.registerCommand('
            + "'extension." + page['command'] + "', () => {\n"
            + "        commands.executeCommand('vscode.open', "
            + "Uri.parse(baseUrl + '" + page['slug'] + "'));\n"
            + "    });\n"
            + "    context.subscriptions.push(" + page['command'] + ");\n"
        )

    f.write("\n}")

print('Extension files have been built.')
