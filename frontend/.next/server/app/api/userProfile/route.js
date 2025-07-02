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
exports.id = "app/api/userProfile/route";
exports.ids = ["app/api/userProfile/route"];
exports.modules = {

/***/ "(rsc)/./app/api/userProfile/route.ts":
/*!**************************************!*\
  !*** ./app/api/userProfile/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/prisma/prisma */ \"(rsc)/./utils/prisma/prisma.ts\");\n/* harmony import */ var _utils_supabase_get_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/supabase/get-user */ \"(rsc)/./utils/supabase/get-user.ts\");\n\n\n\nconst keywords = [\n    \"savings\",\n    \"income\",\n    \"monthlyDebts\",\n    \"creditScore\"\n];\nasync function PATCH(req) {\n    try {\n        console.log(\"Patch called\");\n        const user = await (0,_utils_supabase_get_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const body = await req.json();\n        const profile = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                uid: user?.id\n            }\n        });\n        const profileId = profile?.id;\n        const updatedUserProfile = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.userProfile.update({\n            where: {\n                userId: profileId\n            },\n            data: body\n        });\n        const isPatchingFinancialFileds = keywords.some((field)=>field in body);\n        if (isPatchingFinancialFileds) {\n            const res = await fetch('http://127.0.0.1:8000/calculate', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    uid: profileId,\n                    annual_income: updatedUserProfile.income,\n                    monthly_debt: updatedUserProfile.monthlyDebts,\n                    down_payment: updatedUserProfile.savings\n                })\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updatedUserProfile);\n    } catch (error) {\n        console.error('PATCH error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to update'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET(req) {\n    try {\n        const url = new URL(req.url);\n        const userId = url.searchParams.get('userId');\n        if (!userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Missing userId'\n            }, {\n                status: 400\n            });\n        }\n        const profile = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                uid: userId\n            }\n        });\n        console.log(profile?.uid);\n        if (!profile?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Missing userId'\n            }, {\n                status: 400\n            });\n        }\n        const userProfile = await _utils_prisma_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.userProfile.findUnique({\n            where: {\n                userId: profile?.id\n            }\n        });\n        if (!userProfile) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'User not found'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(userProfile, {\n            status: 200\n        });\n    } catch (error) {\n        console.log(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO1FBQUk7SUFDcEU7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3ByYW5hdi92ZWVkdS9mcm9udGVuZC9hcHAvYXBpL3VzZXJQcm9maWxlL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvdXRpbHMvcHJpc21hL3ByaXNtYSc7XG5pbXBvcnQgZ2V0VXNlciBmcm9tICdAL3V0aWxzL3N1cGFiYXNlL2dldC11c2VyJztcblxuY29uc3Qga2V5d29yZHMgPSBbXCJzYXZpbmdzXCIsIFwiaW5jb21lXCIsIFwibW9udGhseURlYnRzXCIsIFwiY3JlZGl0U2NvcmVcIl07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQQVRDSChyZXE6IFJlcXVlc3Qpe1xuICAgIHRyeXtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGF0Y2ggY2FsbGVkXCIpXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcigpO1xuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgdWlkOiB1c2VyPy5pZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBwcm9maWxlSWQgPSBwcm9maWxlPy5pZDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyUHJvZmlsZSA9IGF3YWl0IHByaXNtYS51c2VyUHJvZmlsZS51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHByb2ZpbGVJZCB9LFxuICAgICAgICBkYXRhOiBib2R5LCAvLyBhcHBsaWVzIG9ubHkgZmllbGRzIHBhc3NlZCBpbiBib2R5XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaXNQYXRjaGluZ0ZpbmFuY2lhbEZpbGVkcyA9IGtleXdvcmRzLnNvbWUoZmllbGQgPT4gZmllbGQgaW4gYm9keSk7XG4gICAgICBpZihpc1BhdGNoaW5nRmluYW5jaWFsRmlsZWRzKXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jYWxjdWxhdGUnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICB1aWQ6IHByb2ZpbGVJZCxcbiAgICAgICAgICAgICAgYW5udWFsX2luY29tZTogdXBkYXRlZFVzZXJQcm9maWxlLmluY29tZSxcbiAgICAgICAgICAgICAgbW9udGhseV9kZWJ0OiB1cGRhdGVkVXNlclByb2ZpbGUubW9udGhseURlYnRzLFxuICAgICAgICAgICAgICBkb3duX3BheW1lbnQ6IHVwZGF0ZWRVc2VyUHJvZmlsZS5zYXZpbmdzLFxuICAgICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXBkYXRlZFVzZXJQcm9maWxlKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdQQVRDSCBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byB1cGRhdGUnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgY29uc3QgdXNlcklkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3VzZXJJZCcpO1xuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyB1c2VySWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgdWlkOiB1c2VySWQgfSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHByb2ZpbGU/LnVpZClcblxuICAgIGlmICghcHJvZmlsZT8uaWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyB1c2VySWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlclByb2ZpbGUgPSBhd2FpdCBwcmlzbWEudXNlclByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyB1c2VySWQ6IHByb2ZpbGU/LmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXJQcm9maWxlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VzZXIgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1c2VyUHJvZmlsZSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1NlcnZlciBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJnZXRVc2VyIiwia2V5d29yZHMiLCJQQVRDSCIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiYm9keSIsImpzb24iLCJwcm9maWxlIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidWlkIiwiaWQiLCJwcm9maWxlSWQiLCJ1cGRhdGVkVXNlclByb2ZpbGUiLCJ1c2VyUHJvZmlsZSIsInVwZGF0ZSIsInVzZXJJZCIsImRhdGEiLCJpc1BhdGNoaW5nRmluYW5jaWFsRmlsZWRzIiwic29tZSIsImZpZWxkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImFubnVhbF9pbmNvbWUiLCJpbmNvbWUiLCJtb250aGx5X2RlYnQiLCJtb250aGx5RGVidHMiLCJkb3duX3BheW1lbnQiLCJzYXZpbmdzIiwiZXJyb3IiLCJzdGF0dXMiLCJHRVQiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/userProfile/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FuserProfile%2Froute&page=%2Fapi%2FuserProfile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FuserProfile%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FuserProfile%2Froute&page=%2Fapi%2FuserProfile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FuserProfile%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_pranav_veedu_frontend_app_api_userProfile_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/userProfile/route.ts */ \"(rsc)/./app/api/userProfile/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/userProfile/route\",\n        pathname: \"/api/userProfile\",\n        filename: \"route\",\n        bundlePath: \"app/api/userProfile/route\"\n    },\n    resolvedPagePath: \"/Users/pranav/veedu/frontend/app/api/userProfile/route.ts\",\n    nextConfigOutput,\n    userland: _Users_pranav_veedu_frontend_app_api_userProfile_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyUHJvZmlsZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlclByb2ZpbGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VyUHJvZmlsZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnByYW5hdiUyRnZlZWR1JTJGZnJvbnRlbmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcHJhbmF2JTJGdmVlZHUlMkZmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDUztBQUN0RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3ByYW5hdi92ZWVkdS9mcm9udGVuZC9hcHAvYXBpL3VzZXJQcm9maWxlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2VyUHJvZmlsZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJQcm9maWxlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2VyUHJvZmlsZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9wcmFuYXYvdmVlZHUvZnJvbnRlbmQvYXBwL2FwaS91c2VyUHJvZmlsZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FuserProfile%2Froute&page=%2Fapi%2FuserProfile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FuserProfile%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/cookie","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FuserProfile%2Froute&page=%2Fapi%2FuserProfile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FuserProfile%2Froute.ts&appDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpranav%2Fveedu%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();