'use strict';
import { workspace, commands, Uri, ExtensionContext } from 'vscode'

export function activate(context: ExtensionContext) {

    let version = workspace.getConfiguration("livewireDocs").version;
    let baseUrl = version == '2.x' ? `https://laravel-livewire.com/docs/2.x/` : 'https://livewire.laravel.com/docs/';

    let livewireDocsV2Actions = commands.registerCommand('extension.livewireDocsV2Actions', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'actions'));
    });
    context.subscriptions.push(livewireDocsV2Actions);
    let livewireDocsV2AlpineJs = commands.registerCommand('extension.livewireDocsV2AlpineJs', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'alpine-js'));
    });
    context.subscriptions.push(livewireDocsV2AlpineJs);
    let livewireDocsV2ArtisanCommands = commands.registerCommand('extension.livewireDocsV2ArtisanCommands', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'artisan-commands'));
    });
    context.subscriptions.push(livewireDocsV2ArtisanCommands);
    let livewireDocsV2Authorization = commands.registerCommand('extension.livewireDocsV2Authorization', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'authorization'));
    });
    context.subscriptions.push(livewireDocsV2Authorization);
    let livewireDocsV2ContributionGuide = commands.registerCommand('extension.livewireDocsV2ContributionGuide', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'contribution-guide'));
    });
    context.subscriptions.push(livewireDocsV2ContributionGuide);
    let livewireDocsV2DeferLoading = commands.registerCommand('extension.livewireDocsV2DeferLoading', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'defer-loading'));
    });
    context.subscriptions.push(livewireDocsV2DeferLoading);
    let livewireDocsV2Deployment = commands.registerCommand('extension.livewireDocsV2Deployment', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'deployment'));
    });
    context.subscriptions.push(livewireDocsV2Deployment);
    let livewireDocsV2DirtyStates = commands.registerCommand('extension.livewireDocsV2DirtyStates', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'dirty-states'));
    });
    context.subscriptions.push(livewireDocsV2DirtyStates);
    let livewireDocsV2Events = commands.registerCommand('extension.livewireDocsV2Events', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'events'));
    });
    context.subscriptions.push(livewireDocsV2Events);
    let livewireDocsV2FileDownloads = commands.registerCommand('extension.livewireDocsV2FileDownloads', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'file-downloads'));
    });
    context.subscriptions.push(livewireDocsV2FileDownloads);
    let livewireDocsV2FileUploads = commands.registerCommand('extension.livewireDocsV2FileUploads', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'file-uploads'));
    });
    context.subscriptions.push(livewireDocsV2FileUploads);
    let livewireDocsV2FlashMessages = commands.registerCommand('extension.livewireDocsV2FlashMessages', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'flash-messages'));
    });
    context.subscriptions.push(livewireDocsV2FlashMessages);
    let livewireDocsV2InlineScripts = commands.registerCommand('extension.livewireDocsV2InlineScripts', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'inline-scripts'));
    });
    context.subscriptions.push(livewireDocsV2InlineScripts);
    let livewireDocsV2InputValidation = commands.registerCommand('extension.livewireDocsV2InputValidation', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'input-validation'));
    });
    context.subscriptions.push(livewireDocsV2InputValidation);
    let livewireDocsV2Installation = commands.registerCommand('extension.livewireDocsV2Installation', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'installation'));
    });
    context.subscriptions.push(livewireDocsV2Installation);
    let livewireDocsV2LaravelEcho = commands.registerCommand('extension.livewireDocsV2LaravelEcho', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'laravel-echo'));
    });
    context.subscriptions.push(livewireDocsV2LaravelEcho);
    let livewireDocsV2LifecycleHooks = commands.registerCommand('extension.livewireDocsV2LifecycleHooks', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'lifecycle-hooks'));
    });
    context.subscriptions.push(livewireDocsV2LifecycleHooks);
    let livewireDocsV2LoadingStates = commands.registerCommand('extension.livewireDocsV2LoadingStates', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'loading-states'));
    });
    context.subscriptions.push(livewireDocsV2LoadingStates);
    let livewireDocsV2MakingComponents = commands.registerCommand('extension.livewireDocsV2MakingComponents', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'making-components'));
    });
    context.subscriptions.push(livewireDocsV2MakingComponents);
    let livewireDocsV2NestingComponents = commands.registerCommand('extension.livewireDocsV2NestingComponents', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'nesting-components'));
    });
    context.subscriptions.push(livewireDocsV2NestingComponents);
    let livewireDocsV2OfflineState = commands.registerCommand('extension.livewireDocsV2OfflineState', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'offline-state'));
    });
    context.subscriptions.push(livewireDocsV2OfflineState);
    let livewireDocsV2PackageDev = commands.registerCommand('extension.livewireDocsV2PackageDev', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'package-dev'));
    });
    context.subscriptions.push(livewireDocsV2PackageDev);
    let livewireDocsV2Pagination = commands.registerCommand('extension.livewireDocsV2Pagination', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'pagination'));
    });
    context.subscriptions.push(livewireDocsV2Pagination);
    let livewireDocsV2Polling = commands.registerCommand('extension.livewireDocsV2Polling', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'polling'));
    });
    context.subscriptions.push(livewireDocsV2Polling);
    let livewireDocsV2Prefetching = commands.registerCommand('extension.livewireDocsV2Prefetching', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'prefetching'));
    });
    context.subscriptions.push(livewireDocsV2Prefetching);
    let livewireDocsV2Properties = commands.registerCommand('extension.livewireDocsV2Properties', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'properties'));
    });
    context.subscriptions.push(livewireDocsV2Properties);
    let livewireDocsV2QueryString = commands.registerCommand('extension.livewireDocsV2QueryString', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'query-string'));
    });
    context.subscriptions.push(livewireDocsV2QueryString);
    let livewireDocsV2Quickstart = commands.registerCommand('extension.livewireDocsV2Quickstart', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'quickstart'));
    });
    context.subscriptions.push(livewireDocsV2Quickstart);
    let livewireDocsV2Redirecting = commands.registerCommand('extension.livewireDocsV2Redirecting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'redirecting'));
    });
    context.subscriptions.push(livewireDocsV2Redirecting);
    let livewireDocsV2Reference = commands.registerCommand('extension.livewireDocsV2Reference', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'reference'));
    });
    context.subscriptions.push(livewireDocsV2Reference);
    let livewireDocsV2RenderingComponents = commands.registerCommand('extension.livewireDocsV2RenderingComponents', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'rendering-components'));
    });
    context.subscriptions.push(livewireDocsV2RenderingComponents);
    let livewireDocsV2Security = commands.registerCommand('extension.livewireDocsV2Security', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'security'));
    });
    context.subscriptions.push(livewireDocsV2Security);
    let livewireDocsV2Testing = commands.registerCommand('extension.livewireDocsV2Testing', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'testing'));
    });
    context.subscriptions.push(livewireDocsV2Testing);
    let livewireDocsV2Traits = commands.registerCommand('extension.livewireDocsV2Traits', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'traits'));
    });
    context.subscriptions.push(livewireDocsV2Traits);
    let livewireDocsV2Troubleshooting = commands.registerCommand('extension.livewireDocsV2Troubleshooting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'troubleshooting'));
    });
    context.subscriptions.push(livewireDocsV2Troubleshooting);
    let livewireDocsV2Upgrading = commands.registerCommand('extension.livewireDocsV2Upgrading', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'upgrading'));
    });
    context.subscriptions.push(livewireDocsV2Upgrading);
    let livewireDocsV3Actions = commands.registerCommand('extension.livewireDocsV3Actions', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'actions'));
    });
    context.subscriptions.push(livewireDocsV3Actions);
    let livewireDocsV3Alpine = commands.registerCommand('extension.livewireDocsV3Alpine', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'alpine'));
    });
    context.subscriptions.push(livewireDocsV3Alpine);
    let livewireDocsV3Components = commands.registerCommand('extension.livewireDocsV3Components', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'components'));
    });
    context.subscriptions.push(livewireDocsV3Components);
    let livewireDocsV3ComputedProperties = commands.registerCommand('extension.livewireDocsV3ComputedProperties', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'computed-properties'));
    });
    context.subscriptions.push(livewireDocsV3ComputedProperties);
    let livewireDocsV3ContributionGuide = commands.registerCommand('extension.livewireDocsV3ContributionGuide', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'contribution-guide'));
    });
    context.subscriptions.push(livewireDocsV3ContributionGuide);
    let livewireDocsV3Downloads = commands.registerCommand('extension.livewireDocsV3Downloads', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'downloads'));
    });
    context.subscriptions.push(livewireDocsV3Downloads);
    let livewireDocsV3Events = commands.registerCommand('extension.livewireDocsV3Events', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'events'));
    });
    context.subscriptions.push(livewireDocsV3Events);
    let livewireDocsV3Forms = commands.registerCommand('extension.livewireDocsV3Forms', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'forms'));
    });
    context.subscriptions.push(livewireDocsV3Forms);
    let livewireDocsV3Hydration = commands.registerCommand('extension.livewireDocsV3Hydration', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'hydration'));
    });
    context.subscriptions.push(livewireDocsV3Hydration);
    let livewireDocsV3Installation = commands.registerCommand('extension.livewireDocsV3Installation', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'installation'));
    });
    context.subscriptions.push(livewireDocsV3Installation);
    let livewireDocsV3Javascript = commands.registerCommand('extension.livewireDocsV3Javascript', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'javascript'));
    });
    context.subscriptions.push(livewireDocsV3Javascript);
    let livewireDocsV3Lazy = commands.registerCommand('extension.livewireDocsV3Lazy', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'lazy'));
    });
    context.subscriptions.push(livewireDocsV3Lazy);
    let livewireDocsV3LifecycleHooks = commands.registerCommand('extension.livewireDocsV3LifecycleHooks', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'lifecycle-hooks'));
    });
    context.subscriptions.push(livewireDocsV3LifecycleHooks);
    let livewireDocsV3Locked = commands.registerCommand('extension.livewireDocsV3Locked', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'locked'));
    });
    context.subscriptions.push(livewireDocsV3Locked);
    let livewireDocsV3Morphing = commands.registerCommand('extension.livewireDocsV3Morphing', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'morphing'));
    });
    context.subscriptions.push(livewireDocsV3Morphing);
    let livewireDocsV3Navigate = commands.registerCommand('extension.livewireDocsV3Navigate', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'navigate'));
    });
    context.subscriptions.push(livewireDocsV3Navigate);
    let livewireDocsV3Nesting = commands.registerCommand('extension.livewireDocsV3Nesting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'nesting'));
    });
    context.subscriptions.push(livewireDocsV3Nesting);
    let livewireDocsV3Offline = commands.registerCommand('extension.livewireDocsV3Offline', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'offline'));
    });
    context.subscriptions.push(livewireDocsV3Offline);
    let livewireDocsV3Pagination = commands.registerCommand('extension.livewireDocsV3Pagination', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'pagination'));
    });
    context.subscriptions.push(livewireDocsV3Pagination);
    let livewireDocsV3Properties = commands.registerCommand('extension.livewireDocsV3Properties', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'properties'));
    });
    context.subscriptions.push(livewireDocsV3Properties);
    let livewireDocsV3Quickstart = commands.registerCommand('extension.livewireDocsV3Quickstart', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'quickstart'));
    });
    context.subscriptions.push(livewireDocsV3Quickstart);
    let livewireDocsV3Redirecting = commands.registerCommand('extension.livewireDocsV3Redirecting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'redirecting'));
    });
    context.subscriptions.push(livewireDocsV3Redirecting);
    let livewireDocsV3Security = commands.registerCommand('extension.livewireDocsV3Security', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'security'));
    });
    context.subscriptions.push(livewireDocsV3Security);
    let livewireDocsV3Synthesizers = commands.registerCommand('extension.livewireDocsV3Synthesizers', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'synthesizers'));
    });
    context.subscriptions.push(livewireDocsV3Synthesizers);
    let livewireDocsV3Teleport = commands.registerCommand('extension.livewireDocsV3Teleport', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'teleport'));
    });
    context.subscriptions.push(livewireDocsV3Teleport);
    let livewireDocsV3Testing = commands.registerCommand('extension.livewireDocsV3Testing', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'testing'));
    });
    context.subscriptions.push(livewireDocsV3Testing);
    let livewireDocsV3UnderstandingNesting = commands.registerCommand('extension.livewireDocsV3UnderstandingNesting', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'understanding-nesting'));
    });
    context.subscriptions.push(livewireDocsV3UnderstandingNesting);
    let livewireDocsV3Upgrading = commands.registerCommand('extension.livewireDocsV3Upgrading', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'upgrading'));
    });
    context.subscriptions.push(livewireDocsV3Upgrading);
    let livewireDocsV3Uploads = commands.registerCommand('extension.livewireDocsV3Uploads', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'uploads'));
    });
    context.subscriptions.push(livewireDocsV3Uploads);
    let livewireDocsV3Url = commands.registerCommand('extension.livewireDocsV3Url', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'url'));
    });
    context.subscriptions.push(livewireDocsV3Url);
    let livewireDocsV3Validation = commands.registerCommand('extension.livewireDocsV3Validation', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'validation'));
    });
    context.subscriptions.push(livewireDocsV3Validation);
    let livewireDocsV3Volt = commands.registerCommand('extension.livewireDocsV3Volt', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'volt'));
    });
    context.subscriptions.push(livewireDocsV3Volt);
    let livewireDocsV3WireClick = commands.registerCommand('extension.livewireDocsV3WireClick', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-click'));
    });
    context.subscriptions.push(livewireDocsV3WireClick);
    let livewireDocsV3WireConfirm = commands.registerCommand('extension.livewireDocsV3WireConfirm', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-confirm'));
    });
    context.subscriptions.push(livewireDocsV3WireConfirm);
    let livewireDocsV3WireDirty = commands.registerCommand('extension.livewireDocsV3WireDirty', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-dirty'));
    });
    context.subscriptions.push(livewireDocsV3WireDirty);
    let livewireDocsV3WireIgnore = commands.registerCommand('extension.livewireDocsV3WireIgnore', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-ignore'));
    });
    context.subscriptions.push(livewireDocsV3WireIgnore);
    let livewireDocsV3WireInit = commands.registerCommand('extension.livewireDocsV3WireInit', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-init'));
    });
    context.subscriptions.push(livewireDocsV3WireInit);
    let livewireDocsV3WireLoading = commands.registerCommand('extension.livewireDocsV3WireLoading', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-loading'));
    });
    context.subscriptions.push(livewireDocsV3WireLoading);
    let livewireDocsV3WireModel = commands.registerCommand('extension.livewireDocsV3WireModel', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-model'));
    });
    context.subscriptions.push(livewireDocsV3WireModel);
    let livewireDocsV3WireNavigate = commands.registerCommand('extension.livewireDocsV3WireNavigate', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-navigate'));
    });
    context.subscriptions.push(livewireDocsV3WireNavigate);
    let livewireDocsV3WireOffline = commands.registerCommand('extension.livewireDocsV3WireOffline', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-offline'));
    });
    context.subscriptions.push(livewireDocsV3WireOffline);
    let livewireDocsV3WirePoll = commands.registerCommand('extension.livewireDocsV3WirePoll', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-poll'));
    });
    context.subscriptions.push(livewireDocsV3WirePoll);
    let livewireDocsV3WireStream = commands.registerCommand('extension.livewireDocsV3WireStream', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-stream'));
    });
    context.subscriptions.push(livewireDocsV3WireStream);
    let livewireDocsV3WireSubmit = commands.registerCommand('extension.livewireDocsV3WireSubmit', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-submit'));
    });
    context.subscriptions.push(livewireDocsV3WireSubmit);
    let livewireDocsV3WireTransition = commands.registerCommand('extension.livewireDocsV3WireTransition', () => {
        commands.executeCommand('vscode.open', Uri.parse(baseUrl + 'wire-transition'));
    });
    context.subscriptions.push(livewireDocsV3WireTransition);

}