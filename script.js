function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);

  // 드롭 대상이 cell이고 자식이 없는 경우에만 drop 허용
  if (ev.target.classList.contains("cell") && ev.target.children.length === 0) {
    ev.target.appendChild(draggedElement);

    // 위치 저장 - 콘솔 출력 (게임 로직에서 활용 가능)
    const position = ev.target.getAttribute("data-position");
    console.log(`카드 ${data}가 위치 ${position}에 배치됨`);
  }
}
