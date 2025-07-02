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
exports.id = "app/api/user/route";
exports.ids = ["app/api/user/route"];
exports.modules = {

/***/ "(rsc)/./app/api/user/route.ts":
/*!*******************************!*\
  !*** ./app/api/user/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/prisma/prisma */ \"(rsc)/./utils/prisma/prisma.ts\");\n/* harmony import */ var _utils_supabase_get_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/supabase/get-user */ \"(rsc)/./utils/supabase/get-user.ts\");\n// app/api/user/add/route.ts\n\n\n\nasync function POST(req) {\n    try {\n        const { uid, email, firstName, lastName } = await req.json();\n        // Check if user already exists by unique field (uid or email)\n        const existingUser = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existingUser) {\n            console.log('User already exists:', existingUser);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'User already exists'\n            }, {\n                status: 200\n            });\n        }\n        // Create user\n        const user = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.create({\n            data: {\n                uid,\n                email,\n                firstName,\n                lastName\n            }\n        });\n        // Create user profile\n        const userProfile = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.userProfile.create({\n            data: {\n                userId: user.id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(user, {\n            status: 201\n        });\n    } catch (error) {\n        console.error('Error creating user:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to create user'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET(req) {\n    try {\n        const { searchParams } = new URL(req.url);\n        const userUid = searchParams.get('uid');\n        if (!userUid) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Missing uid parameter'\n            }, {\n                status: 400\n            });\n        }\n        const user = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                uid: userUid\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'User not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(user, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error getting user:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to get user'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PATCH(req) {\n    try {\n        console.log(\"Patch called\");\n        const user = await (0,_utils_supabase_get_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const body = await req.json();\n        const profile = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                uid: user?.id\n            }\n        });\n        const profileId = profile?.id;\n        const updatedUser = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.update({\n            where: {\n                id: profileId\n            },\n            data: body\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updatedUser);\n    } catch (error) {\n        console.error('PATCH error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to update'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Z0JBQUVTLElBQUlXO1lBQVU7WUFDdkJkLE1BQU1ZO1FBQ1I7UUFFQSxPQUFPL0IscURBQVlBLENBQUNTLElBQUksQ0FBQ3lCO0lBQzNCLEVBQUUsT0FBTVgsT0FBTztRQUNiVCxRQUFRUyxLQUFLLENBQUMsZ0JBQWdCQTtRQUM5QixPQUFPdkIscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFYyxPQUFPO1FBQW1CLEdBQUc7WUFBRU4sUUFBUTtRQUFJO0lBQ3hFO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFuYXYvdmVlZHUvZnJvbnRlbmQvYXBwL2FwaS91c2VyL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvdXNlci9hZGQvcm91dGUudHNcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvdXRpbHMvcHJpc21hL3ByaXNtYSc7XG5pbXBvcnQgZ2V0VXNlciBmcm9tICdAL3V0aWxzL3N1cGFiYXNlL2dldC11c2VyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1aWQsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0cyBieSB1bmlxdWUgZmllbGQgKHVpZCBvciBlbWFpbClcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sIC8vIG9yIHVzZSB7IGVtYWlsIH0gaWYgdGhhdCdzIHlvdXIgdW5pcXVlIGNvbnN0cmFpbnRcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGFscmVhZHkgZXhpc3RzOicsIGV4aXN0aW5nVXNlcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnVXNlciBhbHJlYWR5IGV4aXN0cycgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdXNlclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB1aWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSB1c2VyIHByb2ZpbGVcbiAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGF3YWl0IHByaXNtYS51c2VyUHJvZmlsZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXIsIHsgc3RhdHVzOiAyMDEgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgdXNlcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHVzZXInIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgIGNvbnN0IHVzZXJVaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCd1aWQnKTtcblxuICAgIGlmICghdXNlclVpZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIHVpZCBwYXJhbWV0ZXInIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdWlkOiB1c2VyVWlkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXNlciwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHVzZXI6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGdldCB1c2VyJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQQVRDSChyZXE6IFJlcXVlc3Qpe1xuICB0cnl7XG4gICAgY29uc29sZS5sb2coXCJQYXRjaCBjYWxsZWRcIilcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcigpO1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVpZDogdXNlcj8uaWQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHByb2ZpbGVJZCA9IHByb2ZpbGU/LmlkO1xuICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBwcm9maWxlSWQgfSxcbiAgICAgIGRhdGE6IGJvZHksIC8vIGFwcGxpZXMgb25seSBmaWVsZHMgcGFzc2VkIGluIGJvZHlcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1cGRhdGVkVXNlcik7XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdQQVRDSCBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImdldFVzZXIiLCJQT1NUIiwicmVxIiwidWlkIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImpzb24iLCJleGlzdGluZ1VzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJjcmVhdGUiLCJkYXRhIiwidXNlclByb2ZpbGUiLCJ1c2VySWQiLCJpZCIsImVycm9yIiwiR0VUIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwidXNlclVpZCIsImdldCIsIlBBVENIIiwiYm9keSIsInByb2ZpbGUiLCJwcm9maWxlSWQiLCJ1cGRhdGVkVXNlciIsInVwZGF0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_pranav_veedu_frontend_app_api_user_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/user/route.ts */ \"(rsc)/./app/api/user/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/route\",\n        pathname: \"/api/user\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/route\"\n    },\n    resolvedPagePath: \"/Users/pranav/veedu/frontend/app/api/user/route.ts\",\n    nextConfigOutput,\n    userland: _Users_pranav_veedu_frontend_app_api_user_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlciUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnByYW5hdiUyRnZlZWR1JTJGZnJvbnRlbmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcHJhbmF2JTJGdmVlZHUlMkZmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3ByYW5hdi92ZWVkdS9mcm9udGVuZC9hcHAvYXBpL3VzZXIvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2VyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2VyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3ByYW5hdi92ZWVkdS9mcm9udGVuZC9hcHAvYXBpL3VzZXIvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/cookie","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();