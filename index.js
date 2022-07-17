const inputEl = document.getElementById("input-rel");
const buttonEl = document.getElementById("input-btn");
const delEl = document.getElementById("delete-btn");
const tabEl = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

// const containerEl = document.getElementById("container");

let myLeads = [];
const Leads = JSON.parse(localStorage.getItem("myLeads"));

if(Leads)
{
myLeads = Leads;
render(myLeads);
}

function render(leads){
    let listItems = "";
for(let i=0; i<leads.length; i++)
{
    listItems += `
        <li>
             <a target=_black 
                href='${leads[i]}'>${leads[i]}
             </a>
        </li>`;
        // console.log(listItems);
}
ulEl.innerHTML=listItems;
}

buttonEl.addEventListener("click", () =>    
{
 myLeads.push(inputEl.value);
 inputEl.value="";
 localStorage.setItem("myLeads", JSON.stringify(myLeads));
 render(myLeads);
});

delEl.addEventListener("dblclick", () =>
{
    inputEl.value="";
    localStorage.clear();
    myLeads= [];
    // ulEl.innerHTML = '';
    render(myLeads);
});


tabEl.addEventListener("click", () =>
{
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads);
        });
});