/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/house/route";
exports.ids = ["app/api/house/route"];
exports.modules = {

/***/ "(rsc)/./app/api/house/route.ts":
/*!********************************!*\
  !*** ./app/api/house/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/prisma/prisma */ \"(rsc)/./utils/prisma/prisma.ts\");\n/* harmony import */ var _utils_supabase_get_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/supabase/get-user */ \"(rsc)/./utils/supabase/get-user.ts\");\n// app/api/house/route.ts\n\n\n\nasync function POST(req) {\n    try {\n        const formData = await req.formData();\n        const user = await (0,_utils_supabase_get_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'User not authenticated'\n            }, {\n                status: 401\n            });\n        }\n        const res = await fetch(`${\"http://localhost:3000\"}/api/user?uid=${user.id}`, {\n            cache: 'no-store'\n        });\n        if (!res.ok) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Failed to fetch user profile'\n            }, {\n                status: 400\n            });\n        }\n        const profile = await res.json();\n        const houseData = {\n            address: formData.get('address'),\n            city: formData.get('city'),\n            state: formData.get('state'),\n            zip: formData.get('zip'),\n            ownerId: profile?.ic\n        };\n        console.log(houseData);\n        const house = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.house.create({\n            data: houseData\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL('/dashboard/Properties/PropertiesDepth', req.url));\n    } catch (error) {\n        console.error('Error creating house:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET(req) {\n    try {\n        const { searchParams } = new URL(req.url);\n        const ownerId = Number(searchParams.get('ownerId'));\n        if (!ownerId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"owner id is required\"\n            }, {\n                status: 404\n            });\n        }\n        const houses = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.house.findMany({\n            where: {\n                ownerId: ownerId\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(houses, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error getting houses:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to get houses'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2hvdXNlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEseUJBQXlCO0FBQ2tCO0FBQ0k7QUFDQztBQUV6QyxlQUFlRyxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ELElBQUlDLFFBQVE7UUFFbkMsTUFBTUMsT0FBTyxNQUFNSixvRUFBT0E7UUFDMUIsSUFBSSxDQUFDSSxNQUFNO1lBQ1QsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF5QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDOUU7UUFFQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sR0FBR0MsdUJBQWdDLENBQUMsY0FBYyxFQUFFTixLQUFLUyxFQUFFLEVBQUUsRUFBRTtZQUNyRkMsT0FBTztRQUNUO1FBRUEsSUFBSSxDQUFDTixJQUFJTyxFQUFFLEVBQUU7WUFDWCxPQUFPakIscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUErQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEY7UUFFQSxNQUFNUyxVQUFVLE1BQU1SLElBQUlILElBQUk7UUFFOUIsTUFBTVksWUFBWTtZQUNoQkMsU0FBU2YsU0FBU2dCLEdBQUcsQ0FBQztZQUN0QkMsTUFBTWpCLFNBQVNnQixHQUFHLENBQUM7WUFDbkJFLE9BQU9sQixTQUFTZ0IsR0FBRyxDQUFDO1lBQ3BCRyxLQUFLbkIsU0FBU2dCLEdBQUcsQ0FBQztZQUNsQkksU0FBU1AsU0FBU1E7UUFDcEI7UUFFQUMsUUFBUUMsR0FBRyxDQUFDVDtRQUVaLE1BQU1VLFFBQVEsTUFBTTVCLHdEQUFNQSxDQUFDNEIsS0FBSyxDQUFDQyxNQUFNLENBQUM7WUFDdENDLE1BQU1aO1FBQ1I7UUFFQSxPQUFPbkIscURBQVlBLENBQUNnQyxRQUFRLENBQUMsSUFBSUMsSUFBSSx5Q0FBeUM3QixJQUFJOEIsR0FBRztJQUN2RixFQUFFLE9BQU8xQixPQUFPO1FBQ2RtQixRQUFRbkIsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT1IscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0Y7QUFHTyxlQUFlMEIsSUFBSS9CLEdBQVk7SUFDbEMsSUFBRztRQUNDLE1BQU0sRUFBQ2dDLFlBQVksRUFBQyxHQUFHLElBQUlILElBQUk3QixJQUFJOEIsR0FBRztRQUN0QyxNQUFNVCxVQUFVWSxPQUFPRCxhQUFhZixHQUFHLENBQUM7UUFFeEMsSUFBRyxDQUFDSSxTQUFRO1lBQ1IsT0FBT3pCLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQUNDLE9BQU87WUFBc0IsR0FBRztnQkFBQ0MsUUFBUTtZQUFHO1FBQzFFO1FBRUEsTUFBTTZCLFNBQVMsTUFBTXJDLHdEQUFNQSxDQUFDNEIsS0FBSyxDQUFDVSxRQUFRLENBQUM7WUFDdkNDLE9BQU87Z0JBQUNmLFNBQVNBO1lBQU87UUFDNUI7UUFFQSxPQUFPekIscURBQVlBLENBQUNPLElBQUksQ0FBQytCLFFBQVE7WUFBRTdCLFFBQVE7UUFBSTtJQUNuRCxFQUFFLE9BQU1ELE9BQU07UUFDVm1CLFFBQVFuQixLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxPQUFPUixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUNDLE9BQU87UUFBc0IsR0FBRztZQUFDQyxRQUFRO1FBQUc7SUFDMUU7QUFDSiIsInNvdXJjZXMiOlsiL1VzZXJzL3ByYW5hdi92ZWVkdS9mcm9udGVuZC9hcHAvYXBpL2hvdXNlL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvaG91c2Uvcm91dGUudHNcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvdXRpbHMvcHJpc21hL3ByaXNtYSc7XG5pbXBvcnQgZ2V0VXNlciBmcm9tICdAL3V0aWxzL3N1cGFiYXNlL2dldC11c2VyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKCk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VzZXIgbm90IGF1dGhlbnRpY2F0ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkx9L2FwaS91c2VyP3VpZD0ke3VzZXIuaWR9YCwge1xuICAgICAgY2FjaGU6ICduby1zdG9yZScsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggdXNlciBwcm9maWxlJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc3QgaG91c2VEYXRhID0ge1xuICAgICAgYWRkcmVzczogZm9ybURhdGEuZ2V0KCdhZGRyZXNzJykgYXMgc3RyaW5nLFxuICAgICAgY2l0eTogZm9ybURhdGEuZ2V0KCdjaXR5JykgYXMgc3RyaW5nLFxuICAgICAgc3RhdGU6IGZvcm1EYXRhLmdldCgnc3RhdGUnKSBhcyBzdHJpbmcsXG4gICAgICB6aXA6IGZvcm1EYXRhLmdldCgnemlwJykgYXMgc3RyaW5nLFxuICAgICAgb3duZXJJZDogcHJvZmlsZT8uaWMsXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGhvdXNlRGF0YSk7XG5cbiAgICBjb25zdCBob3VzZSA9IGF3YWl0IHByaXNtYS5ob3VzZS5jcmVhdGUoe1xuICAgICAgZGF0YTogaG91c2VEYXRhLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvZGFzaGJvYXJkL1Byb3BlcnRpZXMvUHJvcGVydGllc0RlcHRoJywgcmVxLnVybCkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGhvdXNlOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBSZXF1ZXN0KXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHtzZWFyY2hQYXJhbXN9ID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICAgICAgY29uc3Qgb3duZXJJZCA9IE51bWJlcihzZWFyY2hQYXJhbXMuZ2V0KCdvd25lcklkJykpO1xuXG4gICAgICAgIGlmKCFvd25lcklkKXtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZXJyb3I6IFwib3duZXIgaWQgaXMgcmVxdWlyZWRcIn0sIHtzdGF0dXM6IDQwNH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaG91c2VzID0gYXdhaXQgcHJpc21hLmhvdXNlLmZpbmRNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7b3duZXJJZDogb3duZXJJZH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oaG91c2VzLCB7IHN0YXR1czogMjAwIH0pXG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgaG91c2VzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtlcnJvcjogJ0ZhaWxlZCB0byBnZXQgaG91c2VzJ30sIHtzdGF0dXM6IDUwMH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiZ2V0VXNlciIsIlBPU1QiLCJyZXEiLCJmb3JtRGF0YSIsInVzZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TSVRFX1VSTCIsImlkIiwiY2FjaGUiLCJvayIsInByb2ZpbGUiLCJob3VzZURhdGEiLCJhZGRyZXNzIiwiZ2V0IiwiY2l0eSIsInN0YXRlIiwiemlwIiwib3duZXJJZCIsImljIiwiY29uc29sZSIsImxvZyIsImhvdXNlIiwiY3JlYXRlIiwiZGF0YSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiR0VUIiwic2VhcmNoUGFyYW1zIiwiTnVtYmVyIiwiaG91c2VzIiwiZmluZE1hbnkiLCJ3aGVyZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/house/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fhouse%2Froute&page=%2Fapi%2Fhouse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhouse%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fhouse%2Froute&page=%2Fapi%2Fhouse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhouse%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_pranav_veedu_frontend_app_api_house_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/house/route.ts */ \"(rsc)/./app/api/house/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/house/route\",\n        pathname: \"/api/house\",\n        filename: \"route\",\n        bundlePath: \"app/api/house/route\"\n    },\n    resolvedPagePath: \"/Users/pranav/veedu/frontend/app/api/house/route.ts\",\n    nextConfigOutput,\n    userland: _Users_pranav_veedu_frontend_app_api_house_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZob3VzZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaG91c2UlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZob3VzZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnByYW5hdiUyRnZlZWR1JTJGZnJvbnRlbmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcHJhbmF2JTJGdmVlZHUlMkZmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDRztBQUNoRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3ByYW5hdi92ZWVkdS9mcm9udGVuZC9hcHAvYXBpL2hvdXNlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ob3VzZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2hvdXNlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ob3VzZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9wcmFuYXYvdmVlZHUvZnJvbnRlbmQvYXBwL2FwaS9ob3VzZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fhouse%2Froute&page=%2Fapi%2Fhouse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhouse%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./utils/prisma/prisma.ts":
/*!********************************!*\
  !*** ./utils/prisma/prisma.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        'query'\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcmlzbWEvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUM2QjtBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLO1FBQUM7S0FBUTtBQUNoQixHQUFFO0FBRUosSUFBSUMsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyIvVXNlcnMvcHJhbmF2L3ZlZWR1L2Zyb250ZW5kL3V0aWxzL3ByaXNtYS9wcmlzbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogWydxdWVyeSddLCAvLyBPcHRpb25hbDogc2hvd3MgU1FMIHF1ZXJpZXMgaW4gZGV2XG4gIH0pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/prisma/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./utils/supabase/get-user.ts":
/*!************************************!*\
  !*** ./utils/supabase/get-user.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUser)\n/* harmony export */ });\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"(rsc)/./utils/supabase/server.ts\");\n\nasync function getUser() {\n    const supabase = await (0,_server__WEBPACK_IMPORTED_MODULE_0__.createClient)();\n    const { data: { user }, error } = await supabase.auth.getUser();\n    return user ?? null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9zdXBhYmFzZS9nZXQtdXNlci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUV6QixlQUFlQztJQUMxQixNQUFNQyxXQUFXLE1BQU1GLHFEQUFZQTtJQUNuQyxNQUFNLEVBQ0ZHLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEVBQ2RDLEtBQUssRUFDUixHQUFHLE1BQU1ILFNBQVNJLElBQUksQ0FBQ0wsT0FBTztJQUMvQixPQUFPRyxRQUFRO0FBQ25CIiwic291cmNlcyI6WyIvVXNlcnMvcHJhbmF2L3ZlZWR1L2Zyb250ZW5kL3V0aWxzL3N1cGFiYXNlL2dldC11c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJy4vc2VydmVyJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpe1xuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XG4gICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IHVzZXIgfSxcbiAgICAgICAgZXJyb3IsXG4gICAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuICAgIHJldHVybiB1c2VyID8/IG51bGw7XG59OyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJnZXRVc2VyIiwic3VwYWJhc2UiLCJkYXRhIiwidXNlciIsImVycm9yIiwiYXV0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/supabase/get-user.ts\n");

/***/ }),

/***/ "(rsc)/./utils/supabase/server.ts":
/*!**********************************!*\
  !*** ./utils/supabase/server.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/ssr */ \"(rsc)/./node_modules/@supabase/ssr/dist/module/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst createClient = async ()=>{\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createServerClient)(\"https://dfjffamgbzvotxxntjxu.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmamZmYW1nYnp2b3R4eG50anh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5NDQyMzgsImV4cCI6MjA2MzUyMDIzOH0.8y944DTxtCh-hhlmzSgYzxnlrzr4DUH69o8_VWn9Ubw\", {\n        cookies: {\n            getAll () {\n                return cookieStore.getAll();\n            },\n            setAll (cookiesToSet) {\n                try {\n                    cookiesToSet.forEach(({ name, value, options })=>{\n                        cookieStore.set(name, value, options);\n                    });\n                } catch (error) {\n                // The `set` method was called from a Server Component.\n                // This can be ignored if you have middleware refreshing\n                // user sessions.\n                }\n            }\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9zdXBhYmFzZS9zZXJ2ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBQ1o7QUFFaEMsTUFBTUUsZUFBZTtJQUMxQixNQUFNQyxjQUFjLE1BQU1GLHFEQUFPQTtJQUVqQyxPQUFPRCxpRUFBa0JBLENBQ3ZCSSwwQ0FBb0MsRUFDcENBLGtOQUF5QyxFQUN6QztRQUNFSCxTQUFTO1lBQ1BPO2dCQUNFLE9BQU9MLFlBQVlLLE1BQU07WUFDM0I7WUFDQUMsUUFBT0MsWUFBWTtnQkFDakIsSUFBSTtvQkFDRkEsYUFBYUMsT0FBTyxDQUFDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTt3QkFDNUNYLFlBQVlZLEdBQUcsQ0FBQ0gsTUFBTUMsT0FBT0M7b0JBQy9CO2dCQUNGLEVBQUUsT0FBT0UsT0FBTztnQkFDZCx1REFBdUQ7Z0JBQ3ZELHdEQUF3RDtnQkFDeEQsaUJBQWlCO2dCQUNuQjtZQUNGO1FBQ0Y7SUFDRjtBQUVKLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFuYXYvdmVlZHUvZnJvbnRlbmQvdXRpbHMvc3VwYWJhc2Uvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlcnZlckNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3NyXCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2xpZW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcblxuICByZXR1cm4gY3JlYXRlU2VydmVyQ2xpZW50KFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkhLFxuICAgIHtcbiAgICAgIGNvb2tpZXM6IHtcbiAgICAgICAgZ2V0QWxsKCkge1xuICAgICAgICAgIHJldHVybiBjb29raWVTdG9yZS5nZXRBbGwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWxsKGNvb2tpZXNUb1NldCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb29raWVzVG9TZXQuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVGhlIGBzZXRgIG1ldGhvZCB3YXMgY2FsbGVkIGZyb20gYSBTZXJ2ZXIgQ29tcG9uZW50LlxuICAgICAgICAgICAgLy8gVGhpcyBjYW4gYmUgaWdub3JlZCBpZiB5b3UgaGF2ZSBtaWRkbGV3YXJlIHJlZnJlc2hpbmdcbiAgICAgICAgICAgIC8vIHVzZXIgc2Vzc2lvbnMuXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXJDbGllbnQiLCJjb29raWVzIiwiY3JlYXRlQ2xpZW50IiwiY29va2llU3RvcmUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJnZXRBbGwiLCJzZXRBbGwiLCJjb29raWVzVG9TZXQiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwib3B0aW9ucyIsInNldCIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/supabase/server.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/cookie","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fhouse%2Froute&page=%2Fapi%2Fhouse%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhouse%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();