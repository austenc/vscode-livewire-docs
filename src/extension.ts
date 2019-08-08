'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let livewireDocsApi = vscode.commands.registerCommand('extension.livewireDocsApi', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/api'));
    });
    context.subscriptions.push(livewireDocsApi);
    let livewireDocsComponentBasics = vscode.commands.registerCommand('extension.livewireDocsComponentBasics', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/component-basics'));
    });
    context.subscriptions.push(livewireDocsComponentBasics);
    let livewireDocsCssTransitions = vscode.commands.registerCommand('extension.livewireDocsCssTransitions', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/css-transitions'));
    });
    context.subscriptions.push(livewireDocsCssTransitions);
    let livewireDocsCustomJavascript = vscode.commands.registerCommand('extension.livewireDocsCustomJavascript', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/custom-javascript'));
    });
    context.subscriptions.push(livewireDocsCustomJavascript);
    let livewireDocsDataBinding = vscode.commands.registerCommand('extension.livewireDocsDataBinding', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/data-binding'));
    });
    context.subscriptions.push(livewireDocsDataBinding);
    let livewireDocsEvents = vscode.commands.registerCommand('extension.livewireDocsEvents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/events'));
    });
    context.subscriptions.push(livewireDocsEvents);
    let livewireDocsInputValidation = vscode.commands.registerCommand('extension.livewireDocsInputValidation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/input-validation'));
    });
    context.subscriptions.push(livewireDocsInputValidation);
    let livewireDocsInstallation = vscode.commands.registerCommand('extension.livewireDocsInstallation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/installation'));
    });
    context.subscriptions.push(livewireDocsInstallation);
    let livewireDocsLifecycleHooks = vscode.commands.registerCommand('extension.livewireDocsLifecycleHooks', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/lifecycle-hooks'));
    });
    context.subscriptions.push(livewireDocsLifecycleHooks);
    let livewireDocsLoadingStates = vscode.commands.registerCommand('extension.livewireDocsLoadingStates', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/loading-states'));
    });
    context.subscriptions.push(livewireDocsLoadingStates);
    let livewireDocsNestingComponents = vscode.commands.registerCommand('extension.livewireDocsNestingComponents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/nesting-components'));
    });
    context.subscriptions.push(livewireDocsNestingComponents);
    let livewireDocsQuickstart = vscode.commands.registerCommand('extension.livewireDocsQuickstart', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/quickstart'));
    });
    context.subscriptions.push(livewireDocsQuickstart);
    let livewireDocsRedirecting = vscode.commands.registerCommand('extension.livewireDocsRedirecting', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/redirecting'));
    });
    context.subscriptions.push(livewireDocsRedirecting);
    let livewireDocsRenderingComponents = vscode.commands.registerCommand('extension.livewireDocsRenderingComponents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/rendering-components'));
    });
    context.subscriptions.push(livewireDocsRenderingComponents);
    let livewireDocsSecurity = vscode.commands.registerCommand('extension.livewireDocsSecurity', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/security'));
    });
    context.subscriptions.push(livewireDocsSecurity);
    let livewireDocsSpaMode = vscode.commands.registerCommand('extension.livewireDocsSpaMode', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/spa-mode'));
    });
    context.subscriptions.push(livewireDocsSpaMode);
    let livewireDocsTesting = vscode.commands.registerCommand('extension.livewireDocsTesting', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/testing'));
    });
    context.subscriptions.push(livewireDocsTesting);
    let livewireDocsTriggeringActions = vscode.commands.registerCommand('extension.livewireDocsTriggeringActions', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://livewire-framework.com/docs/triggering-actions'));
    });
    context.subscriptions.push(livewireDocsTriggeringActions);

}