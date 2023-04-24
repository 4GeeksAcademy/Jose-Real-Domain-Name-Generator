/* eslint-disable */

import "bootstrap";
import "./style.css";
import "./assets/img/africa-g9b6f862d7_1280.jpg";

window.onload = function() {
  let pronouns = ["my", "your", "the", "our", "that"];

  let adjectives = [
    "incredible",
    "gorgeous",
    "great",
    "wonderful",
    "unbelievable",
    "amazing",
    "weird",
    "strange",
    "unusual",
    "funny",
    "happy"
  ];

  let nouns = [
    "unicorn",
    "panda",
    "geek",
    "racoon",
    "sloth",
    "place",
    "club",
    "bassinet",
    "clarinet",
    "castanet",
    "martinet",
    "cabinet",
    "noncom",
    "sitcom",
    "romcom",
    "antipodes",
    "jakes",
    "stapes",
    "cyborg",
    "showbiz"
  ];

  let domains = ["net", "com", "es", "org", "edu", "biz", "info"];

  let select = document.getElementById("domain-select");

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          let domain = domains[l];
          let noun = nouns[k];
          if (noun.slice(-domain.length) === domain) {
            noun = noun.slice(0, -domain.length);
            let option = document.createElement("option");
            option.text = pronouns[i] + adjectives[j] + noun + "." + domain;
            select.appendChild(option);
          } else {
            let option = document.createElement("option");
            option.text =
              pronouns[i] + adjectives[j] + nouns[k] + "." + domains[l];
            select.appendChild(option);
          }
        }
      }
    }
  }
};
