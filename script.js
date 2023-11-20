const modalBodyActivePart = document.querySelector('.modal-body-active-part');

// contactUs - donate
function donate(){
  // contactUs - donate：conduct modal-body-active-part screen
  if (modalBodyActivePart.classList[1] !== 'active') {
    modalBodyActivePart.innerHTML = `
    <p class="modal-body-active-part-title fs-5 fw-bold">捐款方案</p>
    <!-- program 1 -->
    <button class="donatePlan-btn active">
      <p class="donatePlan-btn-title fs-5">喵星人之友</p>
      <div class="donatePlan-btn-info">
        <div class="donatePlan-btn-info-price">
          <div class="donatePlan-btn-info-price-currency">
            NT$
          </div>
          <div class="donatePlan-btn-info-price-num">
            600
          </div>
        </div>
        <div class="donatePlan-btn-info-peopleAmount fs-s-14">已有 9,957 人贊助</div>
      </div>
    </button>
    <!-- program 2 -->
    <button class="donatePlan-btn">
      <p class="donatePlan-btn-title fs-5">喵星大使</p>
      <div class="donatePlan-btn-info">
        <div class="donatePlan-btn-info-price">
          <div class="donatePlan-btn-info-price-currency">
            NT$
          </div>
          <div class="donatePlan-btn-info-price-num">
            6,000
          </div>
        </div>
        <div class="donatePlan-btn-info-peopleAmount fs-s-14">已有 2,000 人贊助</div>
      </div>
    </button>
    <!-- program 3 -->
    <button class="donatePlan-btn">
      <p class="donatePlan-btn-title fs-5">喵星傳奇</p>
      <div class="donatePlan-btn-info">
        <div class="donatePlan-btn-info-price">
          <div class="donatePlan-btn-info-price-currency">
            NT$
          </div>
          <div class="donatePlan-btn-info-price-num">
            600,00
          </div>
        </div>
        <div class="donatePlan-btn-info-peopleAmount fs-s-14">已有 999 人贊助</div>
      </div>
    </button>
    <!-- program 4 - Customize donate -->
    <button class="donatePlan-btn donatePlan-btn-customize">
      <p class="donatePlan-btn-title donatePlan-btn-customize-title fs-5">自訂贊助金額</p>
      <div class="donatePlan-btn-customize-input">
        <span>NT$</span>
        <input type="text" name="" id="" placeholder="輸入金額">
      </div>
    </button>
    <!-- donate btn -->
    <button class="btns btn-brown" id="btn-donatePayment">
      <p class="h6">前往捐款</p>
    </button>`
  };

  const donatePlanBtns = document.querySelectorAll('.donatePlan-btn');
  // use-class'active', conduct with styling, button and HTML
  donatePlanBtns.forEach(item => {
    item.addEventListener('click', e => {
      donatePlanBtns.forEach(item => {
        item.classList.remove('active');
      });
      item.classList.add('active');
    });
    item.addEventListener('focus', e => {
      donatePlanBtns.forEach(item => {
        item.classList.remove('active');
      });
      item.classList.add('active');
    });
  });

  const btnDonatePayment = document.querySelector('#btn-donatePayment');
  btnDonatePayment.addEventListener('click', e => {
    modalBodyActivePart.classList.add('active');
    modalBodyActivePart.innerHTML = `
    <div class="fs-3 fw-bold">感謝您的捐款</div>
    <img src="/img/Group 15.png" alt="">
    <button class="btns btn-gray" data-bs-dismiss="modal" id="close">
      <p class="h6">關閉</p>
    </button>`;
    const close = document.querySelector('#close');
    close.addEventListener('click', e => {
      modalBodyActivePart.classList.remove('active');
      render();
    });
  });
};



function render(){
  donate();
}

render();