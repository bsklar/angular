'use strict';"use strict";
var core_1 = require('angular2/core');
var platform_location_1 = require('angular2/src/router/location/platform_location');
var platform_location_2 = require('./platform_location');
var router_providers_common_1 = require('angular2/src/router/router_providers_common');
exports.WORKER_APP_ROUTER = [
    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
    new core_1.Provider(platform_location_1.PlatformLocation, { useClass: platform_location_2.WebWorkerPlatformLocation }),
    new core_1.Provider(core_1.APP_INITIALIZER, {
        useFactory: function (platformLocation, zone) { return function () {
            return initRouter(platformLocation, zone);
        }; },
        multi: true,
        deps: [platform_location_1.PlatformLocation, core_1.NgZone]
    })
];
function initRouter(platformLocation, zone) {
    return zone.run(function () { return platformLocation.init(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdUVnSHlIc0EudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIvcm91dGVyX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWdFLGVBQWUsQ0FBQyxDQUFBO0FBQ2hGLGtDQUErQixnREFBZ0QsQ0FBQyxDQUFBO0FBQ2hGLGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzlELHdDQUFzQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBRXpFLHlCQUFpQixHQUFHO0lBQzdCLGlEQUF1QjtJQUN2QixJQUFJLGVBQVEsQ0FBQyxvQ0FBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2Q0FBeUIsRUFBQyxDQUFDO0lBQ3JFLElBQUksZUFBUSxDQUFDLHNCQUFlLEVBQ2Y7UUFDRSxVQUFVLEVBQUUsVUFBQyxnQkFBMkMsRUFBRSxJQUFZLElBQUssT0FBQTtZQUMzRCxPQUFBLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7UUFBbEMsQ0FBa0MsRUFEeUIsQ0FDekI7UUFDbEQsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxhQUFNLENBQUM7S0FDakMsQ0FBQztDQUNoQixDQUFDO0FBRUYsb0JBQW9CLGdCQUEyQyxFQUFFLElBQVk7SUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBUSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgUHJvdmlkZXIsIE5nWm9uZSwgQVBQX0lOSVRJQUxJWkVSfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9sb2NhdGlvbi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge1dlYldvcmtlclBsYXRmb3JtTG9jYXRpb259IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTX0NPTU1PTn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXJfcHJvdmlkZXJzX2NvbW1vbic7XG5cbmV4cG9ydCB2YXIgV09SS0VSX0FQUF9ST1VURVIgPSBbXG4gIFJPVVRFUl9QUk9WSURFUlNfQ09NTU9OLFxuICBuZXcgUHJvdmlkZXIoUGxhdGZvcm1Mb2NhdGlvbiwge3VzZUNsYXNzOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9ufSksXG4gIG5ldyBQcm92aWRlcihBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChwbGF0Zm9ybUxvY2F0aW9uOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLCB6b25lOiBOZ1pvbmUpID0+ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0Um91dGVyKHBsYXRmb3JtTG9jYXRpb24sIHpvbmUpLFxuICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgZGVwczogW1BsYXRmb3JtTG9jYXRpb24sIE5nWm9uZV1cbiAgICAgICAgICAgICAgIH0pXG5dO1xuXG5mdW5jdGlvbiBpbml0Um91dGVyKHBsYXRmb3JtTG9jYXRpb246IFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb24sIHpvbmU6IE5nWm9uZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gem9uZS5ydW4oKCkgPT4geyByZXR1cm4gcGxhdGZvcm1Mb2NhdGlvbi5pbml0KCk7IH0pO1xufVxuIl19