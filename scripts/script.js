const modalBodyActivePart = document.querySelectorAll('.modal-body-active-part');
const copyrightPart = document.querySelector('.footer-info-first-copyright');

// contactUs - donate
function donate(){
  // contactUs - donate：conduct modal-body-active-part screen
  if (modalBodyActivePart[0].classList[1] !== 'active') {
    modalBodyActivePart[0].innerHTML = `
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
    modalBodyActivePart[0].classList.add('active');
    modalBodyActivePart[0].innerHTML = `
    <div class="fs-3 fw-bold">感謝您的捐款</div>
    <img src="img/Group 15.png" alt="">
    <button class="btns btn-gray border-0" data-bs-dismiss="modal" id="close">
      <p class="h6">關閉</p>
    </button>`;
    const close = document.querySelector('#close');
    close.addEventListener('click', e => {
      modalBodyActivePart[0].classList.remove('active');
      render();
    });
  });
};

// contactUs - email
function email(){
  // contactUs - email modal-body-active-part screen
  if (modalBodyActivePart[1].classList[1] !== 'active') {
    modalBodyActivePart[1].innerHTML = `
    <ul>
      <li>
        <label for="inputname" class="form-label fw-bold">您的姓名</label>
        <input type="text" id="inputname" class="form-control fs-m-16" placeholder="姓名">
      </li>
      <li>
        <label for="inputemail" class="form-label fw-bold">Email</label>
        <input type="text" id="inputemail" class="form-control fs-m-16" placeholder="email">
      </li>
      <li>
        <label for="inputphone" class="form-label fw-bold">手機</label>
        <input type="text" id="inputphone" class="form-control fs-m-16" placeholder="手機號碼">
      </li>
      <li>
        <label for="inputmsg" class="form-label fw-bold">您的建言</label>
        <!-- <input type="text" id="inputmsg" class="form-control fs-m-16" placeholder="輸入內容"> -->
        <textarea name="inputmsg" id="inputmsg" class="form-control fs-m-16" cols="30" rows="6"
          placeholder="輸入內容"></textarea>
      </li>
      <!-- submit btn -->
      <li>
        <button class="btns btn-brown" type="submit" id="btn-submitForm">
          <p class="h6">送出意見</p>
        </button>
      </li>
    </ul>`
  };

  const submitFormBtn = document.querySelector('#btn-submitForm');
  submitFormBtn.addEventListener('click', e => {
    e.preventDefault();
    modalBodyActivePart[1].classList.add('active');
    modalBodyActivePart[1].innerHTML = `
      <div class="fs-3 fw-bold">感謝您的意見</div>
      <img src="img/Group 15.png" alt="">
      <button class="btns btn-gray border-0" data-bs-dismiss="modal" id="close">
        <p class="h6">關閉</p>
      </button>`;
    const close = document.querySelector('#close');
    close.addEventListener('click', e => {
      modalBodyActivePart[1].classList.remove('active');
      render();
    });
  });
};

// footer - copyright's year
// function copyright(){
//   copyrightPart.textContent = `© ${new Date().getFullYear()} 喵立翰 Miao Li-Han 版權所有`;
// }

function render(){
  donate();
  email();
  // copyright();
}

render();