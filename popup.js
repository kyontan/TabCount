var background = chrome.extension.getBackgroundPage();

count         = background.count;
opened_count  = background.opened_count;

function tweet() {
  text = "現在、 " + String(count) + "タブ開いています。"
  text += "今までに " + String(opened_count) + "タブ開きました。"
  url = "https://twitter.com/intent/tweet?hashtags=TabCount&text=" + text;

  document.getElementById("tweet").href = url;
  return true;
}

document.getElementById("tweet").addEventListener("click", tweet);
