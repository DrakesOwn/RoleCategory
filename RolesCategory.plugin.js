/** 
 * @name RoleCategory
 * @author DrakesWeb.exe#0500
 * @description This is my plugin.
 * @version 0.0.1
*/

const config = {
	info: {
		name: "RoleCategory",
		id: "RoleCategory",
		description: "Create role category in Roles!",
		version: "0.0.1",
		author: "DrakesWeb.exe",
		updateUrl: "https://raw.githubusercontent.com/Farcrada/DiscordPlugins/master/Double-click-to-edit/DoubleClickToEdit.plugin.js"
	}
};

 module.exports = class RoleCategory {
    start() {
    } 
    stop() {    
    }
 };
    /** Test Zone */


    
  /** Test Zone */
  
  /** Button "myButton" */
  const myButton = document.createElement("button");
  myButton.textContent = "Создать Категорию Ролей";
  const roleButton = document.querySelector("#roles-tab > div > div > div > div > div:nth-child(2) > div:nth-child(4)");
  myButton.classList = 'createButton-1ckN91 button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F';
  roleButton.appendChild(myButton);
    /** Button "myButton" */