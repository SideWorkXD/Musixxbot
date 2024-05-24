const { EmbedBuilder } = require("discord.js");
const db = require("../mongodb");
module.exports = {
  name: "support",
  description: "support server of this Bot",
  execute(message, args) {
    const supportServerLink = "https://discord.gg/BsdfHF6r2M";
    const instaLink = "https://www.instagram.com/ig.billo";
    const twitterLink = "https://twitter.com/BilloXd";
    const youtubeLink = "https://www.youtube.com/@iambilloxd";
    const embed = new EmbedBuilder()
      .setColor("#b300ff")
      .setAuthor({
        name: "Support Server",
        iconURL:
          "https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&",
        url: "https://discord.gg/xQF9f9yUEM",
      })
      .setDescription(
        `<:discordverify:861292720324476968> **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n <a:diamond:859462733233782815> **Follow us on:**\n- Instagram - ${instaLink}\n- Twitter - ${twitterLink}\n- YouTube - ${youtubeLink}`,
      )
      .setImage(
        "https://media.discordapp.net/attachments/1230408029191540807/1232262395867693156/standard_1.gif?ex=6651afc9&is=66505e49&hm=1bc7d9abf84252e15004d2b6a677bc05b7bcfb59fc24b2ea1c993a704cc801d7&=&width=550&height=194",
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
