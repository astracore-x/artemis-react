import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
import React from 'react';
import {renderToString} from 'react-dom/server';
test('every portal page renders without an exception',async()=>{
 const server=await createServer({server:{middlewareMode:true},appType:'custom',ssr:{external:['react','react-dom','react-dom/server','lucide-react']}});
 try{
 const {default:App}=await server.ssrLoadModule('/src/App.jsx');
 const {StoreProvider}=await server.ssrLoadModule('/src/lib/store.jsx');
 const {portals}=await server.ssrLoadModule('/src/lib/data.js');
 globalThis.window={location:{search:''}};
 const render=()=>renderToString(React.createElement(StoreProvider,null,React.createElement(App)));
 assert.ok(render().replaceAll('<!-- -->','').includes('Recruiter portal'));
 for(const [role,portal] of Object.entries(portals))for(const page of portal.items){window.location.search='?'+new URLSearchParams({portal:role,page});const html=render();assert.ok(html.includes('bluework'),`${role}/${page}`);assert.ok(!html.includes('undefined'),`${role}/${page} contains undefined`)}
 }finally{delete globalThis.window;await server.close()}
});
