# LWC-Development Learing Guide
Lightning Web Components javascript framework fundamentals.
Changes applied to code base are being simultaneously tracked on Github and with scratch orgs.

## How to run in your Devhub.
### From your CLI type these commands:
sfdx force:source:convert -d metadatadeploy
*this will create a folder in your directory that changes the source files into metadata files to deploy to your project*

sfdx force:mdapi:deploy -d metadatadeploy -w 5 -u myOrg
*if you fail to load all components then none of them will load. Open the .forceignore file and place the files in there so they will be skipped when deploying*

## Unmanaged package included in bundle:
- ID                             08c5e000000KzXkAAK
- Status                         Success
- Package Id                     0Ho5e000000KzOBCA0
- Package Version Id             05i5e000000Gn8fAAC
- Subscriber Package Version Id  04t5e000000JjtDAAS
- Created Date                   2021-09-28 23:04
- Installation URL               https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5e000000JjtDAAS


## To see the entire learning guide I will be covering, visit my project page: https://github.com/Ma1nframe/LWC-Development/projects/1 which breaks things down by sections and tasks in a kanban style view 

A lot of material will be covered in this learning guide and you are encouraged to follow along here on GitHub. I will be doing the version tracking control through both GitHub and scratch Orgs to provide anyone with interst in picking up the fast growing framework as I progress through stages that you can later follow along in. Any declarative work on the Org that will need to be done will be provided in either video or PDF format.

## How am I tracking my changes?

Changes applied to code base are being simultaneously tracked on Github and with Scratch Orgs.

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for the project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.
=======
# LWC-Development
Lightning Web Components javascript framework fundamentals

# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.
>>>>>>> Committing sfdx setup files for project

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
