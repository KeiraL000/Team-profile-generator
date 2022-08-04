const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = []

const fullArray = []

inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please input name of the manager."
    },
    {
        type: "input",
        name: "managerID",
        message: "Please input manager ID.",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please input manager's email.",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please input manager's office number."
    },
]).then(answers => {
    const managerAppend = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber)
    teamArray.push(managerAppend)

    var managerCard = (`<div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://banner2.cleanpng.com/20180629/pe/kisspng-computer-icons-computer-software-manager-icon-5b35d041b82224.6914912215302533777542.jpg" alt="manager image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${answers.managerName} | ID: ${answers.managerID} | Manager</p>
          <p class="subtitle is-6">Email: ${answers.managerEmail}</p>
        </div>
      </div>
      <p class="subtitle is-5">
        Office number: ${answers.officeNumber}
      </div>
    </div>
  </div>`)

  fullArray.push(managerCard)

  teamCreator()
})

teamCreator = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "class",
            message: "Add people to team?",
            choices: ["Engineer", "Intern", "I am done."]
        }
    ]).then(answers => {
        switch (answers.class) {
            case "Engineer":
                engineerPrompt()
                break;
            case "Intern":
                internPrompt()
                break;
            case "I am done.":
                fs.writeFileSync('../Team-profile-generator/dist/team.html', HTMLTemp());
                console.log(teamArray);
                break;
                default:
        }
    })

    function engineerPrompt() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Input engineer's name.",
            },
            {
                type: "input",
                name: "engineerID",
                message: "Input engineer's ID.",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Input engineer's email.",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Input engineer's github username.",
            },
        ]).then(answers => {
            const engineerAppend = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
            teamArray.push(engineerAppend)

            var engineerCard = (`<div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6Rk3MYrFtUxxSWtN3KrDAdrugUVhlJbg9Sn1SDJYAlmk5iFQFXceILgqhAJ3z_38vGQ&usqp=CAU" alt="engineer image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${answers.engineerName} | ID: ${answers.engineerID} | Engineer</p>
                  <p class="subtitle is-6">Email: ${answers.engineerEmail}</p>
                </div>
              </div>
              <p class="subtitle is-5">
                Github: ${answers.engineerGithub}
              </div>
            </div>
          </div>`)

          fullArray.push(engineerCard)

          teamCreator()
        })
    }
}

function internPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Input intern's name.",
        },
        {
            type: "input",
            name: "internID",
            message: "Input intern's ID.",
        },
        {
            type: "input",
            name: "internEmail",
            message: "Input intern's email.",
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter intern's school.",
        },
    ]).then(answers => {
        const internAppend = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        teamArray.push(internAppend)

        var internCard = (`<div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://static.thenounproject.com/png/2120616-200.png" alt="intern image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">${answers.internName} | ID: ${answers.internID} | Intern</p>
              <p class="subtitle is-6">Email: ${answers.internEmail}</p>
            </div>
          </div>
          <p class="subtitle is-5">
            Current school: ${answers.internSchool}
          </div>
        </div>
      </div>`)
      fullArray.push(internCard)

      teamCreator()
    })
}

const HTMLTemp = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Tracker</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<section class="hero is-info">
    <div class="hero-body">
      <p class="title is-size-1">
        My Team
      </p>
    </div>
  </section>
  <br>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://banner2.cleanpng.com/20180629/pe/kisspng-computer-icons-computer-software-manager-icon-5b35d041b82224.6914912215302533777542.jpg" alt="manager image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${teamArray[0].name} | ID: ${teamArray[0].id} | Manager</p>
          <p class="subtitle is-6">Email: ${teamArray[0].email}</p>
        </div>
      </div>
      <p class="subtitle is-5">
        Office number: ${teamArray[0].office}
      </div>
    </div>
  </div>
  <br>
  <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6Rk3MYrFtUxxSWtN3KrDAdrugUVhlJbg9Sn1SDJYAlmk5iFQFXceILgqhAJ3z_38vGQ&usqp=CAU" alt="engineer image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${teamArray[1].name} | ID: ${teamArray[1].id} | Engineer</p>
                  <p class="subtitle is-6">Email: ${teamArray[1].email}</p>
                </div>
            </div>
              <p class="subtitle is-5">
                Github: <a href="https://www.github.com/${teamArray[1].githubuser}">${teamArray[1].githubuser}</a>
            </div>
        </div>
    </div>
  <br>
  <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://static.thenounproject.com/png/2120616-200.png" alt="intern image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">${teamArray[2].name} | ID: ${teamArray[2].id} | Intern</p>
              <p class="subtitle is-6">Email: ${teamArray[2].email}</p>
            </div>
          </div>
          <p class="subtitle is-5">
            Current school: ${teamArray[2].school}
          </div>
        </div>
      </div>
  <br>
<body>
    
</body>
</html>`
}

module.exports = teamArray;