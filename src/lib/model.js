export const STORAGE_KEY = 'bluework-react-v1';
export function belowCollege(level){return ['Elementary','High school'].includes(level)}
export function normalizeEducation(profile){return belowCollege(profile.education)?{...profile,course:''}:profile}
export function profileIssues(p){
 const errors=[];
 if(!p.name?.trim()||!p.email?.trim()||!p.phone?.trim())errors.push('Add your name, email, and phone number.');
 if(!p.photo)errors.push('Upload a profile image.');
 if(!p.noExperience&&!p.experiences?.some(e=>e.title&&e.company&&e.start&&(e.current||e.end)))errors.push('Add your latest experience or select no work experience.');
 if(!p.education||!p.school?.trim()||(!belowCollege(p.education)&&!p.course?.trim()))errors.push('Complete your education details.');
 if(!p.workRight||!p.background||!p.country)errors.push('Complete the eligibility confirmations.');
 if(p.references?.length<2||p.references?.slice(0,2).some(r=>!r.name||!r.email||!r.phone||!r.company||!r.title))errors.push('Complete two professional references.');
 if(new Set(p.priorities).size!==3)errors.push('Choose three different priority fields.');
 if(!p.jobTitles?.length||!p.skills?.length)errors.push('Select job titles and skills.');
 return errors;
}
export function canInvite(email,domain){return email.trim().toLowerCase().split('@')[1]===domain.toLowerCase()}
export function addApplication(applications,jobId,date){return applications.some(a=>a.jobId===jobId)?applications:[...applications,{id:crypto.randomUUID(),jobId,stage:'Submitted',date}]}
export function preferenceJSON(p){return {currency:'PHP',priorities:p.priorities,jobTitles:p.jobTitles,skills:p.skills,targetPay:{fullTimeMonthly:Number(p.monthly),partTimeHourly:Number(p.hourly)}}}
export function download(name,text,type='application/json'){const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
export function initials(name){return name.split(' ').map(x=>x[0]).slice(0,2).join('')}
export function prettyDate(date){return new Date(date+'T12:00:00').toLocaleDateString('en-PH',{day:'numeric',month:'short'})}
