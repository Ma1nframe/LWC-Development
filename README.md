# Lightning Web Components Learing Guide

## Creation of this repo is for developers interested in learning LWC

_All the foundational knowledge needed to know when attempting to pass Lightning Web Components Superbadge will be included in finished package_

**I will not provide the solution, don't bother asking**

Lightning Web Components javascript framework fundamentals. Kanban style project steps included to follow along.
Changes applied to code base are being simultaneously tracked on Github and with scratch orgs.

## How to deploy

### From your CLI type these commands:

sfdx force:source:convert -d mdapioutput

_this will create a folder in your directory that changes the source files into metadata files to deploy to your project_

sfdx force:mdapi:deploy -d mdapioutput -w 5 -u yourDevOrg

_if you fail to load all components then none of them will load. Open the .forceignore file and place the files in there so they will be skipped when deploying_

### To push source to your scratch org:

sfdx force:source:push

## To see the entire learning guide I will be covering, visit my project page: https://github.com/Ma1nframe/LWC-Development/projects/1 which breaks things down by sections and tasks in a kanban style view

A lot of material will be covered in this learning guide and you are encouraged to follow along here on GitHub. I will be doing the version tracking control through both GitHub and scratch Orgs to provide anyone with interst in picking up the fast growing framework as post stages that you can later follow along to. Any declarative work on the Org that will need to be done will be provided in either video or PDF format.

## Scratch Orgs:

Changes applied to code base are being simultaneously tracked on Github and with Scratch Orgs.

# Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for the project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
