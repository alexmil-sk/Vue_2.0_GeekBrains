<template>
  <div>
    <h2>{{ msg }}</h2>
    <h4>{{ message }}</h4>
    <div class="form">
      <div class="input-group mb-3">
        <span class="input-group-text operand" id="basic-addon1"><b>&#35;</b></span>
        <input
         type="number"
         class="form-control"
         :placeholder="placeholder1"
         aria-label="Operand1"
         aria-describedby="basic-addon1"
			v-model.number="operand1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text operand" id="basic-addon2"><b>&#35;</b></span>
        <input
			type="number"
			class="form-control"
			:placeholder="placeholder2"
			aria-label="Operand2"
			aria-describedby="basic-addon2"
			v-model.number="operand2"
        />
      </div>
      <div class="input-group mb-0">
        <span class="input-group-text calc" id="basic-addon3"><b>&#128425;</b></span>
        <input 
			:style="{
				color: this.result === 'Ошибка ввода!!!' ? 'red' : 'gray',
				borderColor: this.result === 'Ошибка ввода!!!' ? 'red' : '#ccc',
			}"
         type="text"
         class="form-control"
         :placeholder="placeholder3"
         aria-label="Username"
         aria-describedby="basic-addon3"
			:value="result"
        />
        <button
			:style="{
				backgroundColor: this.result !== '' ? 'red' : 'gray',
				border: this.result !== '' ? 'red' : '',
			}"
			class="input-group-text btn btn-danger"
			id="basic-4"
			@click="getClean"
			>clear
			</button>
      </div>
		<ul class="text-list">
			<li>При нахождении квадратного корня числа 2-й операнд не требуется</li>
			<li>При нахождении значения дроби (1/x) 2-й операнд не требуется</li>

		</ul>
		<div class="btn-group btn-calc"
			:style="{
				opacity: this.result !== '' ? '0.5' : '1',
				pointerEvents: this.result !== '' ? 'none' : '',
			}">
			<button class="btn btn-warning" title="Сложение" @click="getAddition">&#10133;</button>
			<button class="btn btn-info" title="Вычитание" @click="getSubtraction">&#10134;</button>
			<button class="btn btn-success" title="Деление" @click="getDivision">&#10135;</button>
			<button class="btn btn-primary" title="Умножение" @click="getMultiple"><span class="symbolX">&#215;</span></button>
		</div>
		<div class="btn-group btn-calc"
			:style="{
				opacity: this.result !== '' ? '0.5' : '',
				pointerEvents: this.result !== '' ? 'none' : '',
			}">
			<button class="btn btn-secondary" title="Степень числа" @click="getExponent"><span class="symbolX1">X^</span></button>
			<button class="btn btn-dark" title="Целочисленное деление" @click="getDivision2"><span class="symbolL">ЦД</span></button>
			<button class="btn btn-light" title="Корень квадратный" @click="getSquareR"><span class="symbolY">&#8730;</span></button>
			<button class="btn btn-primary" title="Дробь" @click="getFract"><span class="symbolX2">1/x</span></button>
		</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Calculator",
  data() {
		return {
			message: "Форма \"Калькулятор\"",
			placeholder1: 'Введите 1-й операнд',
			placeholder2: 'Введите 2-й операнд',
			placeholder3: 'Результат',

			operand1: '',
			operand2: '',
			result: '',
		}
  },
  props: {
    msg: String,
  },
  methods: {
	inputOperand1(event) {
		this.operand1 = event.target.value;
	},
	inputOperand2(event) {
		this.operand2 = event.target.value;
	},
   getAddition() {
		this.result = this.operand1 + this.operand2;
		this.operand1 = this.operand2 = '';
   },
	getSubtraction(){
		this.result = this.operand1 - this.operand2;
		this.operand1 = this.operand2 = '';

	},
	getDivision() {
		if(this.operand2 === 0 || isNaN(this.operand2) || this.operand2 === '') {
			this.result = 'Ошибка ввода!!!'
		} else {
			this.result = (this.operand1 / this.operand2).toFixed(5);
			this.operand1 = this.operand2 = '';
		}	},
	getMultiple() {
		this.result = (this.operand1 * this.operand2).toFixed(5);
		this.operand1 = this.operand2 = '';
	},
	getExponent() {
		this.result = (Math.pow(this.operand1, this.operand2)).toFixed(5);
		this.operand1 = this.operand2 = '';
	},
	getDivision2() {
		if(this.operand2 === 0 || isNaN(this.operand2) || this.operand2 === '') {
			this.result = 'Ошибка ввода!!!'
		} else {
			this.result = Math.floor(this.operand1 / this.operand2);
			this.operand1 = this.operand2 = '';
		}
	},
	getSquareR() {
		this.result = Math.pow(this.operand1, 0.5).toFixed(5);
		this.operand1 = this.operand2 = '';
	},
	getFract() {
		this.result = (1 / this.operand1).toFixed(5);
		this.operand1 = this.operand2 = '';
	},
	getClean() {
		this.result = '';
		this.operand1 = this.placeholder1;
		this.operand2 = this.placeholder2;
	}
  },
  computed: {}
}
</script>
