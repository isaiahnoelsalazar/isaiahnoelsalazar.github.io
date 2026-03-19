const modal1 = new ECModal({title: "Modal 1", content: "Content 1", buttonAmount: 1, buttonLabels: ["Open modal 2"]});
const modal2 = new ECModal({title: "Modal 2", content: "Content 2", buttonAmount: 1, buttonLabels: ["Open modal 1"]});
modal1.setButtonAction(1, () => openModal2());
modal2.setButtonAction(1, () => openModal1());

function openModal1(){
    modal1.show();
}

function openModal2(){
    modal2.show();
}

let toggle = new ECToggle({content: "Toggle 1"});
let toggle2 = new ECToggle({content: "Toggle 2", isChecked: true});
let checkbox = new ECCheckbox({content: "Checkbox 1"});
let checkbox2 = new ECCheckbox({content: "Checkbox 2", isChecked: true});
let button = new ECButton({content: "Button 1", click: "openModal1()"});
let button2 = new ECButton({content: "Button 2", click: "openModal2()"});
let radio = new ECRadio({content: ["Option 1", "Option 2", "Option 3"], initialCheckedIndex: 0});

document.body.appendChild(toggle.build());
document.body.appendChild(toggle2.build());
document.body.appendChild(checkbox.build());
document.body.appendChild(checkbox2.build());
document.body.appendChild(button.build());
document.body.appendChild(button2.build());
document.body.appendChild(radio.build());