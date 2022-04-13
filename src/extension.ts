'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let livewireDocsActions = vscode.commands.registerCommand('extension.livewireDocsActions', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/actions'));
    });
    context.subscriptions.push(livewireDocsActions);
    let livewireDocsAlpineJs = vscode.commands.registerCommand('extension.livewireDocsAlpineJs', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/alpine-js'));
    });
    context.subscriptions.push(livewireDocsAlpineJs);
    let livewireDocsArtisanCommands = vscode.commands.registerCommand('extension.livewireDocsArtisanCommands', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/artisan-commands'));
    });
    context.subscriptions.push(livewireDocsArtisanCommands);
    let livewireDocsAuthorization = vscode.commands.registerCommand('extension.livewireDocsAuthorization', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/authorization'));
    });
    context.subscriptions.push(livewireDocsAuthorization);
    let livewireDocsContributionGuide = vscode.commands.registerCommand('extension.livewireDocsContributionGuide', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/contribution-guide'));
    });
    context.subscriptions.push(livewireDocsContributionGuide);
    let livewireDocsDeferLoading = vscode.commands.registerCommand('extension.livewireDocsDeferLoading', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/defer-loading'));
    });
    context.subscriptions.push(livewireDocsDeferLoading);
    let livewireDocsDeployment = vscode.commands.registerCommand('extension.livewireDocsDeployment', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/deployment'));
    });
    context.subscriptions.push(livewireDocsDeployment);
    let livewireDocsDirtyStates = vscode.commands.registerCommand('extension.livewireDocsDirtyStates', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/dirty-states'));
    });
    context.subscriptions.push(livewireDocsDirtyStates);
    let livewireDocsEvents = vscode.commands.registerCommand('extension.livewireDocsEvents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/events'));
    });
    context.subscriptions.push(livewireDocsEvents);
    let livewireDocsFileDownloads = vscode.commands.registerCommand('extension.livewireDocsFileDownloads', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/file-downloads'));
    });
    context.subscriptions.push(livewireDocsFileDownloads);
    let livewireDocsFileUploads = vscode.commands.registerCommand('extension.livewireDocsFileUploads', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/file-uploads'));
    });
    context.subscriptions.push(livewireDocsFileUploads);
    let livewireDocsFlashMessages = vscode.commands.registerCommand('extension.livewireDocsFlashMessages', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/flash-messages'));
    });
    context.subscriptions.push(livewireDocsFlashMessages);
    let livewireDocsInlineScripts = vscode.commands.registerCommand('extension.livewireDocsInlineScripts', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/inline-scripts'));
    });
    context.subscriptions.push(livewireDocsInlineScripts);
    let livewireDocsInputValidation = vscode.commands.registerCommand('extension.livewireDocsInputValidation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/input-validation'));
    });
    context.subscriptions.push(livewireDocsInputValidation);
    let livewireDocsInstallation = vscode.commands.registerCommand('extension.livewireDocsInstallation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/installation'));
    });
    context.subscriptions.push(livewireDocsInstallation);
    let livewireDocsLaravelEcho = vscode.commands.registerCommand('extension.livewireDocsLaravelEcho', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/laravel-echo'));
    });
    context.subscriptions.push(livewireDocsLaravelEcho);
    let livewireDocsLifecycleHooks = vscode.commands.registerCommand('extension.livewireDocsLifecycleHooks', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/lifecycle-hooks'));
    });
    context.subscriptions.push(livewireDocsLifecycleHooks);
    let livewireDocsLoadingStates = vscode.commands.registerCommand('extension.livewireDocsLoadingStates', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/loading-states'));
    });
    context.subscriptions.push(livewireDocsLoadingStates);
    let livewireDocsMakingComponents = vscode.commands.registerCommand('extension.livewireDocsMakingComponents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/making-components'));
    });
    context.subscriptions.push(livewireDocsMakingComponents);
    let livewireDocsNestingComponents = vscode.commands.registerCommand('extension.livewireDocsNestingComponents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/nesting-components'));
    });
    context.subscriptions.push(livewireDocsNestingComponents);
    let livewireDocsOfflineState = vscode.commands.registerCommand('extension.livewireDocsOfflineState', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/offline-state'));
    });
    context.subscriptions.push(livewireDocsOfflineState);
    let livewireDocsPackageDev = vscode.commands.registerCommand('extension.livewireDocsPackageDev', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/package-dev'));
    });
    context.subscriptions.push(livewireDocsPackageDev);
    let livewireDocsPagination = vscode.commands.registerCommand('extension.livewireDocsPagination', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/pagination'));
    });
    context.subscriptions.push(livewireDocsPagination);
    let livewireDocsPolling = vscode.commands.registerCommand('extension.livewireDocsPolling', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/polling'));
    });
    context.subscriptions.push(livewireDocsPolling);
    let livewireDocsPrefetching = vscode.commands.registerCommand('extension.livewireDocsPrefetching', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/prefetching'));
    });
    context.subscriptions.push(livewireDocsPrefetching);
    let livewireDocsProperties = vscode.commands.registerCommand('extension.livewireDocsProperties', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/properties'));
    });
    context.subscriptions.push(livewireDocsProperties);
    let livewireDocsQueryString = vscode.commands.registerCommand('extension.livewireDocsQueryString', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/query-string'));
    });
    context.subscriptions.push(livewireDocsQueryString);
    let livewireDocsQuickstart = vscode.commands.registerCommand('extension.livewireDocsQuickstart', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/quickstart'));
    });
    context.subscriptions.push(livewireDocsQuickstart);
    let livewireDocsRedirecting = vscode.commands.registerCommand('extension.livewireDocsRedirecting', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/redirecting'));
    });
    context.subscriptions.push(livewireDocsRedirecting);
    let livewireDocsReference = vscode.commands.registerCommand('extension.livewireDocsReference', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/reference'));
    });
    context.subscriptions.push(livewireDocsReference);
    let livewireDocsRenderingComponents = vscode.commands.registerCommand('extension.livewireDocsRenderingComponents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/rendering-components'));
    });
    context.subscriptions.push(livewireDocsRenderingComponents);
    let livewireDocsSecurity = vscode.commands.registerCommand('extension.livewireDocsSecurity', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/security'));
    });
    context.subscriptions.push(livewireDocsSecurity);
    let livewireDocsTesting = vscode.commands.registerCommand('extension.livewireDocsTesting', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/testing'));
    });
    context.subscriptions.push(livewireDocsTesting);
    let livewireDocsTraits = vscode.commands.registerCommand('extension.livewireDocsTraits', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/traits'));
    });
    context.subscriptions.push(livewireDocsTraits);
    let livewireDocsTroubleshooting = vscode.commands.registerCommand('extension.livewireDocsTroubleshooting', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/troubleshooting'));
    });
    context.subscriptions.push(livewireDocsTroubleshooting);
    let livewireDocsUpgrading = vscode.commands.registerCommand('extension.livewireDocsUpgrading', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://laravel-livewire.com/docs/upgrading'));
    });
    context.subscriptions.push(livewireDocsUpgrading);

}