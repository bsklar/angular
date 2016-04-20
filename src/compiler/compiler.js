'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var platform_directives_and_pipes_1 = require('angular2/src/core/platform_directives_and_pipes');
exports.PLATFORM_DIRECTIVES = platform_directives_and_pipes_1.PLATFORM_DIRECTIVES;
exports.PLATFORM_PIPES = platform_directives_and_pipes_1.PLATFORM_PIPES;
__export(require('angular2/src/compiler/template_ast'));
var template_parser_1 = require('angular2/src/compiler/template_parser');
exports.TEMPLATE_TRANSFORMS = template_parser_1.TEMPLATE_TRANSFORMS;
var config_1 = require('./config');
exports.CompilerConfig = config_1.CompilerConfig;
exports.RenderTypes = config_1.RenderTypes;
__export(require('./compile_metadata'));
__export(require('./offline_compiler'));
__export(require('angular2/src/compiler/url_resolver'));
__export(require('angular2/src/compiler/xhr'));
var view_resolver_1 = require('./view_resolver');
exports.ViewResolver = view_resolver_1.ViewResolver;
var directive_resolver_1 = require('./directive_resolver');
exports.DirectiveResolver = directive_resolver_1.DirectiveResolver;
var pipe_resolver_1 = require('./pipe_resolver');
exports.PipeResolver = pipe_resolver_1.PipeResolver;
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var template_parser_2 = require('angular2/src/compiler/template_parser');
var html_parser_1 = require('angular2/src/compiler/html_parser');
var directive_normalizer_1 = require('angular2/src/compiler/directive_normalizer');
var runtime_metadata_1 = require('angular2/src/compiler/runtime_metadata');
var style_compiler_1 = require('angular2/src/compiler/style_compiler');
var view_compiler_1 = require('angular2/src/compiler/view_compiler/view_compiler');
var config_2 = require('./config');
var compiler_1 = require('angular2/src/core/linker/compiler');
var runtime_compiler_1 = require('angular2/src/compiler/runtime_compiler');
var element_schema_registry_1 = require('angular2/src/compiler/schema/element_schema_registry');
var dom_element_schema_registry_1 = require('angular2/src/compiler/schema/dom_element_schema_registry');
var url_resolver_2 = require('angular2/src/compiler/url_resolver');
var parser_1 = require('./expression_parser/parser');
var lexer_1 = require('./expression_parser/lexer');
var view_resolver_2 = require('./view_resolver');
var directive_resolver_2 = require('./directive_resolver');
var pipe_resolver_2 = require('./pipe_resolver');
function _createCompilerConfig() {
    return new config_2.CompilerConfig(lang_1.assertionsEnabled(), false, true);
}
/**
 * A set of providers that provide `RuntimeCompiler` and its dependencies to use for
 * template compilation.
 */
exports.COMPILER_PROVIDERS = lang_1.CONST_EXPR([
    lexer_1.Lexer,
    parser_1.Parser,
    html_parser_1.HtmlParser,
    template_parser_2.TemplateParser,
    directive_normalizer_1.DirectiveNormalizer,
    runtime_metadata_1.RuntimeMetadataResolver,
    url_resolver_2.DEFAULT_PACKAGE_URL_PROVIDER,
    style_compiler_1.StyleCompiler,
    view_compiler_1.ViewCompiler,
    new di_1.Provider(config_2.CompilerConfig, { useFactory: _createCompilerConfig, deps: [] }),
    runtime_compiler_1.RuntimeCompiler,
    new di_1.Provider(compiler_1.Compiler, { useExisting: runtime_compiler_1.RuntimeCompiler }),
    dom_element_schema_registry_1.DomElementSchemaRegistry,
    new di_1.Provider(element_schema_registry_1.ElementSchemaRegistry, { useExisting: dom_element_schema_registry_1.DomElementSchemaRegistry }),
    url_resolver_2.UrlResolver,
    view_resolver_2.ViewResolver,
    directive_resolver_2.DirectiveResolver,
    pipe_resolver_2.PipeResolver
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXRKMmlEVGpSLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhDQUFrRCxpREFBaUQsQ0FBQztBQUE1RixrRkFBbUI7QUFBRSx3RUFBdUU7QUFDcEcsaUJBQWMsb0NBQW9DLENBQUMsRUFBQTtBQUNuRCxnQ0FBa0MsdUNBQXVDLENBQUM7QUFBbEUsb0VBQWtFO0FBQzFFLHVCQUEwQyxVQUFVLENBQUM7QUFBN0MsaURBQWM7QUFBRSwyQ0FBNkI7QUFDckQsaUJBQWMsb0JBQW9CLENBQUMsRUFBQTtBQUNuQyxpQkFBYyxvQkFBb0IsQ0FBQyxFQUFBO0FBQ25DLGlCQUFjLG9DQUFvQyxDQUFDLEVBQUE7QUFDbkQsaUJBQWMsMkJBQTJCLENBQUMsRUFBQTtBQUUxQyw4QkFBMkIsaUJBQWlCLENBQUM7QUFBckMsb0RBQXFDO0FBQzdDLG1DQUFnQyxzQkFBc0IsQ0FBQztBQUEvQyxtRUFBK0M7QUFDdkQsOEJBQTJCLGlCQUFpQixDQUFDO0FBQXJDLG9EQUFxQztBQUU3QyxxQkFBa0QsMEJBQTBCLENBQUMsQ0FBQTtBQUM3RSxtQkFBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBNkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNyRSw0QkFBeUIsbUNBQW1DLENBQUMsQ0FBQTtBQUM3RCxxQ0FBa0MsNENBQTRDLENBQUMsQ0FBQTtBQUMvRSxpQ0FBc0Msd0NBQXdDLENBQUMsQ0FBQTtBQUMvRSwrQkFBNEIsc0NBQXNDLENBQUMsQ0FBQTtBQUNuRSw4QkFBMkIsbURBQW1ELENBQUMsQ0FBQTtBQUMvRSx1QkFBNkIsVUFBVSxDQUFDLENBQUE7QUFDeEMseUJBQXVCLG1DQUFtQyxDQUFDLENBQUE7QUFDM0QsaUNBQThCLHdDQUF3QyxDQUFDLENBQUE7QUFDdkUsd0NBQW9DLHNEQUFzRCxDQUFDLENBQUE7QUFDM0YsNENBQXVDLDBEQUEwRCxDQUFDLENBQUE7QUFDbEcsNkJBQXdELG9DQUFvQyxDQUFDLENBQUE7QUFDN0YsdUJBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQsc0JBQW9CLDJCQUEyQixDQUFDLENBQUE7QUFDaEQsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0M7SUFDRSxNQUFNLENBQUMsSUFBSSx1QkFBYyxDQUFDLHdCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFFRDs7O0dBR0c7QUFDVSwwQkFBa0IsR0FBbUMsaUJBQVUsQ0FBQztJQUMzRSxhQUFLO0lBQ0wsZUFBTTtJQUNOLHdCQUFVO0lBQ1YsZ0NBQWM7SUFDZCwwQ0FBbUI7SUFDbkIsMENBQXVCO0lBQ3ZCLDJDQUE0QjtJQUM1Qiw4QkFBYTtJQUNiLDRCQUFZO0lBQ1osSUFBSSxhQUFRLENBQUMsdUJBQWMsRUFBRSxFQUFDLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDM0Usa0NBQWU7SUFDZixJQUFJLGFBQVEsQ0FBQyxtQkFBUSxFQUFFLEVBQUMsV0FBVyxFQUFFLGtDQUFlLEVBQUMsQ0FBQztJQUN0RCxzREFBd0I7SUFDeEIsSUFBSSxhQUFRLENBQUMsK0NBQXFCLEVBQUUsRUFBQyxXQUFXLEVBQUUsc0RBQXdCLEVBQUMsQ0FBQztJQUM1RSwwQkFBVztJQUNYLDRCQUFZO0lBQ1osc0NBQWlCO0lBQ2pCLDRCQUFZO0NBQ2IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtQTEFURk9STV9ESVJFQ1RJVkVTLCBQTEFURk9STV9QSVBFU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcGxhdGZvcm1fZGlyZWN0aXZlc19hbmRfcGlwZXMnO1xuZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX2FzdCc7XG5leHBvcnQge1RFTVBMQVRFX1RSQU5TRk9STVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9wYXJzZXInO1xuZXhwb3J0IHtDb21waWxlckNvbmZpZywgUmVuZGVyVHlwZXN9IGZyb20gJy4vY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL29mZmxpbmVfY29tcGlsZXInO1xuZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5leHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIveGhyJztcblxuZXhwb3J0IHtWaWV3UmVzb2x2ZXJ9IGZyb20gJy4vdmlld19yZXNvbHZlcic7XG5leHBvcnQge0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICcuL2RpcmVjdGl2ZV9yZXNvbHZlcic7XG5leHBvcnQge1BpcGVSZXNvbHZlcn0gZnJvbSAnLi9waXBlX3Jlc29sdmVyJztcblxuaW1wb3J0IHthc3NlcnRpb25zRW5hYmxlZCwgVHlwZSwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7VGVtcGxhdGVQYXJzZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9wYXJzZXInO1xuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtEaXJlY3RpdmVOb3JtYWxpemVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvZGlyZWN0aXZlX25vcm1hbGl6ZXInO1xuaW1wb3J0IHtSdW50aW1lTWV0YWRhdGFSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3J1bnRpbWVfbWV0YWRhdGEnO1xuaW1wb3J0IHtTdHlsZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvc3R5bGVfY29tcGlsZXInO1xuaW1wb3J0IHtWaWV3Q29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci92aWV3X2NvbXBpbGVyL3ZpZXdfY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlckNvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2NvbXBpbGVyJztcbmltcG9ydCB7UnVudGltZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvcnVudGltZV9jb21waWxlcic7XG5pbXBvcnQge0VsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9kb21fZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtVcmxSZXNvbHZlciwgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSAnLi9leHByZXNzaW9uX3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHtMZXhlcn0gZnJvbSAnLi9leHByZXNzaW9uX3BhcnNlci9sZXhlcic7XG5pbXBvcnQge1ZpZXdSZXNvbHZlcn0gZnJvbSAnLi92aWV3X3Jlc29sdmVyJztcbmltcG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJy4vZGlyZWN0aXZlX3Jlc29sdmVyJztcbmltcG9ydCB7UGlwZVJlc29sdmVyfSBmcm9tICcuL3BpcGVfcmVzb2x2ZXInO1xuXG5mdW5jdGlvbiBfY3JlYXRlQ29tcGlsZXJDb25maWcoKSB7XG4gIHJldHVybiBuZXcgQ29tcGlsZXJDb25maWcoYXNzZXJ0aW9uc0VuYWJsZWQoKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIHByb3ZpZGVycyB0aGF0IHByb3ZpZGUgYFJ1bnRpbWVDb21waWxlcmAgYW5kIGl0cyBkZXBlbmRlbmNpZXMgdG8gdXNlIGZvclxuICogdGVtcGxhdGUgY29tcGlsYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFUl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBMZXhlcixcbiAgUGFyc2VyLFxuICBIdG1sUGFyc2VyLFxuICBUZW1wbGF0ZVBhcnNlcixcbiAgRGlyZWN0aXZlTm9ybWFsaXplcixcbiAgUnVudGltZU1ldGFkYXRhUmVzb2x2ZXIsXG4gIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIsXG4gIFN0eWxlQ29tcGlsZXIsXG4gIFZpZXdDb21waWxlcixcbiAgbmV3IFByb3ZpZGVyKENvbXBpbGVyQ29uZmlnLCB7dXNlRmFjdG9yeTogX2NyZWF0ZUNvbXBpbGVyQ29uZmlnLCBkZXBzOiBbXX0pLFxuICBSdW50aW1lQ29tcGlsZXIsXG4gIG5ldyBQcm92aWRlcihDb21waWxlciwge3VzZUV4aXN0aW5nOiBSdW50aW1lQ29tcGlsZXJ9KSxcbiAgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LFxuICBuZXcgUHJvdmlkZXIoRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCB7dXNlRXhpc3Rpbmc6IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0pLFxuICBVcmxSZXNvbHZlcixcbiAgVmlld1Jlc29sdmVyLFxuICBEaXJlY3RpdmVSZXNvbHZlcixcbiAgUGlwZVJlc29sdmVyXG5dKTtcbiJdfQ==