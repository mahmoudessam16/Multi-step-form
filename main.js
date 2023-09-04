let personalInfo = document.getElementById('personal-info');
let plan = document.getElementById('plan');
let addOns = document.getElementById('add-ons');
let summary = document.getElementById("summary");
let confirmation = document.getElementById("confirmation");
let data = {adds: [], addsMoney: []};

if (personalInfo) {
    document.querySelector(".step.one .number").style.backgroundColor = 'hsl(206, 94%, 87%)';
    document.querySelector(".step.one .number").style.color = 'hsl(213, 96%, 18%)';
}

document.querySelector('#personal-info form').onsubmit = function (e) {
    personalInfo.style.display = 'none';
    plan.style.display = 'block';

    // Toggle Switch
    let ToggleSwitch = document.querySelector('.toggle-checkbox');
    document.querySelector('.yearly').style.color = ToggleSwitch.checked ? 'hsl(213, 96%, 18%)' : '#aaa';
    document.querySelector('.monthly').style.color = !ToggleSwitch.checked ? 'hsl(213, 96%, 18%)' : '#aaa';
    ToggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            document.querySelector('.yearly').style.color = 'hsl(213, 96%, 18%)';
            document.querySelector('.monthly').style.color = '#aaa';
            document.querySelector(".plan-one").innerHTML = '$90/yr';
            document.querySelector(".plan-two").innerHTML = '$120/yr';
            document.querySelector(".plan-three").innerHTML = '$150/yr';
            document.querySelector(".money.one").innerHTML = '+$10/yr';
            document.querySelector(".money.two").innerHTML = '+$20/yr';
            document.querySelector(".money.three").innerHTML = '+$20/yr';
            data["yearly"] = true;
            document.querySelectorAll('.free-months').forEach(ele => {
                ele.style.display = 'block';
            });
        } else {
            document.querySelector('.yearly').style.color = '#aaa';
            document.querySelector('.monthly').style.color = 'hsl(213, 96%, 18%)';
            document.querySelector(".plan-one").innerHTML = '$9/mo';
            document.querySelector(".plan-two").innerHTML = '$12/mo';
            document.querySelector(".plan-three").innerHTML = '$15/mo';
            document.querySelector(".money.one").innerHTML = '+$1/mo';
            document.querySelector(".money.two").innerHTML = '+$2/mo';
            document.querySelector(".money.three").innerHTML = '+$2/mo';
            data["yearly"] = false;
            document.querySelectorAll('.free-months').forEach(ele => {
                ele.style.display = 'none';
            });
        }
    })

    document.querySelectorAll(".step .number").forEach(num => {
        num.style.backgroundColor = 'transparent';
        num.style.color = 'hsl(217, 100%, 97%)';
    });

    if (plan.style.display === 'block') {
        document.querySelector(".step.two .number").style.backgroundColor = 'hsl(206, 94%, 87%)';
        document.querySelector(".step.two .number").style.color = 'hsl(213, 96%, 18%)';
    } 

    document.querySelector('.back-btn').addEventListener('click', function () {
        plan.style.display = 'none';
        personalInfo.style.display = 'block';
        document.querySelectorAll('#personal-info input').forEach(input => {
            input.value = "";
        });
        document.querySelectorAll(".step .number").forEach(num => {
            num.style.backgroundColor = 'transparent';
            num.style.color = 'hsl(217, 100%, 97%)';
        });
        if (personalInfo.style.display === 'block') {
            document.querySelector(".step.one .number").style.backgroundColor = 'hsl(206, 94%, 87%)';
            document.querySelector(".step.one .number").style.color = 'hsl(213, 96%, 18%)';
        }
    });
    document.querySelector("#plan .next-btn").addEventListener("click", function () {
        plan.style.display = 'none';
        addOns.style.display = 'block';
        document.querySelectorAll(".step .number").forEach(num => {
            num.style.backgroundColor = 'transparent';
            num.style.color = 'hsl(217, 100%, 97%)';
        });
        if (addOns.style.display === 'block') {
            document.querySelector(".step.three .number").style.backgroundColor = 'hsl(206, 94%, 87%)';
            document.querySelector(".step.three .number").style.color = 'hsl(213, 96%, 18%)';
        } 
    });
    document.querySelector("#add-ons .back-btn").addEventListener("click", function () {
        addOns.style.display = 'none';
        plan.style.display = 'block';
        document.querySelectorAll(".step .number").forEach(num => {
            num.style.backgroundColor = 'transparent';
            num.style.color = 'hsl(217, 100%, 97%)';
        });
        if (plan.style.display === 'block') {
            document.querySelector(".step.two .number").style.backgroundColor = 'hsl(206, 94%, 87%)';
            document.querySelector(".step.two .number").style.color = 'hsl(213, 96%, 18%)';
        } 
    });
    document.querySelector("#add-ons .next-btn").addEventListener("click", function () {
        addOns.style.display = 'none';
        summary.style.display = 'block';
        document.querySelectorAll(".step .number").forEach(num => {
            num.style.backgroundColor = 'transparent';
            num.style.color = 'hsl(217, 100%, 97%)';
        });
        if (summary.style.display === 'block') {
            document.querySelector(".step.four .number").style.backgroundColor = 'hsl(206, 94%, 87%)';
            document.querySelector(".step.four .number").style.color = 'hsl(213, 96%, 18%)';
        } 
        document.querySelector(".plan-name").textContent = `${data["plan"]} ${data["yearly"] ? "(Yearly)" : "(Monthly)"}`;
        document.querySelector(".plan-price").textContent = data["planMoney"];
        let totalPrice = 0;
        for (let i = 0; i < data.adds.length; i++) {
            let p = document.createElement("p");
            p.textContent = data.adds[i];
            document.querySelector(".add-names").append(p);
        }
        for (let i = 0; i < data.addsMoney.length; i++) {
            let span = document.createElement("span");
            span.textContent = data.addsMoney[i];
            totalPrice += Number(data.addsMoney[i].match(/[0-9]/ig).join(""));
            document.querySelector(".add-prices").append(span)
        }
        document.querySelector(".total p").textContent = `Total (${data["yearly"] ? "per year" : "per month"})`;
        let planPrice = Number(data["planMoney"].match(/[0-9]/ig).join(""));
        document.querySelector(".total span").textContent = `$${totalPrice + planPrice}/${data["yearly"] ? "yr" : "mo"}`;
        document.querySelector("#summary a").addEventListener("click", function () {
            summary.style.display = 'none';
            personalInfo.style.display = 'block';
            document.querySelectorAll(".step .number").forEach(num => {
                num.style.backgroundColor = 'transparent';
                num.style.color = 'hsl(217, 100%, 97%)';
            });
            if (personalInfo.style.display === 'block') {
                document.querySelector(".step.one .number").style.backgroundColor = 'hsl(206, 94%, 87%)';
                document.querySelector(".step.one .number").style.color = 'hsl(213, 96%, 18%)';
            } 
            window.location.reload();
        });
        document.querySelector("#summary .back-btn").addEventListener("click", function () {
            summary.style.display = "none";
            addOns.style.display = 'block';
            document.querySelectorAll(".step .number").forEach(num => {
                num.style.backgroundColor = 'transparent';
                num.style.color = 'hsl(217, 100%, 97%)';
            });
            if (addOns.style.display === 'block') {
                document.querySelector(".step.three .number").style.backgroundColor = 'hsl(206, 94%, 87%)';
                document.querySelector(".step.three .number").style.color = 'hsl(213, 96%, 18%)';
            }
        });
        document.querySelector("#summary .next-btn").addEventListener("click", function () {
            summary.style.display = "none";
            confirmation.style.display = 'block';
        });
    });
    return false;
}


let plans = document.querySelectorAll(".plan");

plans.forEach(plan => {
    plan.addEventListener('click', function () {
        plans.forEach(pla => {
            pla.style.borderColor = 'hsl(229, 24%, 87%)';
            pla.style.backgroundColor = 'transparent';
        });
        if (this.style.borderColor === 'rgb(71, 61, 255)' && this.style.backgroundColor === 'rgb(240, 246, 255)') {
            this.style.borderColor = 'hsl(229, 24%, 87%)';
            this.style.backgroundColor = 'transparent';
        } else {
            this.style.borderColor = 'hsl(243, 100%, 62%)';
            this.style.backgroundColor = 'hsl(217, 100%, 97%)';
        }
        data["plan"] = this.children[1].firstElementChild.innerHTML;
        data["planMoney"] = this.children[1].firstElementChild.nextElementSibling.innerHTML;
    });
});


let addsOnInputs = document.querySelectorAll("#add");

addsOnInputs.forEach(input => {
    input.addEventListener("change", function () {
        if (this.checked) {
            this.parentElement.style.border = '2px solid hsl(228, 100%, 84%)';
            this.parentElement.style.backgroundColor = 'hsl(217, 100%, 97%)';
            data.adds.push(this.nextElementSibling.firstElementChild.innerHTML);
            data.addsMoney.push(this.parentElement.lastElementChild.innerHTML);
        } else {
            this.parentElement.style.border = '1px solid hsl(229, 24%, 87%)';
            this.parentElement.style.backgroundColor = 'transparent';
            data.adds.pop(this.nextElementSibling.firstElementChild.innerHTML);
            data.addsMoney.pop(this.parentElement.lastElementChild.innerHTML);
        }
    });
});
