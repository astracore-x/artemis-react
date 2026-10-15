import test from 'node:test';
import assert from 'node:assert/strict';
import {seed} from '../src/lib/data.js';
import {normalizeEducation,profileIssues,canInvite,addApplication,preferenceJSON} from '../src/lib/model.js';
test('switching to high school clears a previously entered course',()=>{assert.equal(normalizeEducation({...seed.profile,education:'High school',course:'BS Design'}).course,'')});
test('profile completion checks required photo and two complete references',()=>{const p={...structuredClone(seed.profile),photo:'data:image/png;base64,demo'};assert.deepEqual(profileIssues(p),[]);p.references[1].email='';assert.ok(profileIssues(p).some(x=>x.includes('references')));p.photo='';assert.ok(profileIssues(p).some(x=>x.includes('image')))});
test('company invitations are bound to the exact domain',()=>{assert.equal(canInvite('sam@northstar.studio','northstar.studio'),true);assert.equal(canInvite('sam@gmail.com','northstar.studio'),false);assert.equal(canInvite('sam@evilnorthstar.studio','northstar.studio'),false)});
test('duplicate application does not create a second record',()=>{const apps=addApplication([], 'job-1','2026-10-16');assert.equal(addApplication(apps,'job-1','2026-10-17').length,1)});
test('preference export uses PHP and numeric pay units',()=>{assert.deepEqual(preferenceJSON(seed.profile).targetPay,{fullTimeMonthly:65000,partTimeHourly:450});assert.equal(preferenceJSON(seed.profile).currency,'PHP')});
