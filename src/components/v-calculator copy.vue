<template>
	<div>
		<h2>{{ msg }}</h2>
		<h4>{{ message }}</h4>
		<div class="form">
			<!-- //,__<OPERAND1>------------------------------>
			<div class="input-group mb-3">
				<span class="input-group-text operand" id="basic-addon1"><b>&#35;</b></span>
				<input
					:style="{
						color: this.result === 'Ошибка ввода!!!' ? 'red' : 'gray',
						background: this.result === 'Ошибка ввода!!!' ? 'yellow' : '',
						borderColor: this.result === 'Ошибка ввода!!!' ? 'red' : '#ccc',
					}"
					type="number"
					class="form-control"
					:placeholder="placeholder1"
					aria-label="Operand1"
					aria-describedby="basic-addon1"
					v-model.number="operand1"
				/>
			</div>
			<!-- //,__</ OPERAND1>------------------------------>
			<!-- //,__<OPERATION>------------------------------>
			<div class="input-group mb-3" v-if="result">
				<input
					type="text"
					class="form-control"
					:class="{'notes': result}"
					aria-label="operation"
					aria-describedby="basic-addon5"					
					v-model="typeOfOperations"
				/>
			</div>
			<div class="input-group mb-3" v-else-if="!result">
				<input
					type="text"
					class="form-control bg-secondary"
					:class="{'inactive2': !result}"
					:placeholder="placeholder5"
				/>
			</div>
			<!-- //,__</ OPERATION>------------------------------>
			<!-- //,__<OPERAND2>------------------------------>
			<div class="input-group mb-3">
				<span class="input-group-text operand" id="basic-addon2"><b>&#35;</b></span>
				<input
					:style="{
						color: this.result === 'Ошибка ввода!!!' ? 'red' : 'gray',
						background: this.result === 'Ошибка ввода!!!' ? 'yellow' : '',
						borderColor: this.result === 'Ошибка ввода!!!' ? 'red' : '#ccc',
					}"
					type="number"
					class="form-control"
					:placeholder="placeholder2"
					aria-label="Operand2"
					aria-describedby="basic-addon2"
					v-model.number="operand2"
				/>
			</div>
			<!-- //,__</ OPERAND2>------------------------------>
			<!-- //,__<RESULT>------------------------------>
			<div class="input-group mb-3">
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
			<!-- //,__</ RESULT>------------------------------>
			<!-- //,__<NOTES>------------------------------>
			<div class="input-group mb-3" v-if="result">
				<span class="input-group-text operand btn-primary" id="basic-addon4"><b>&#128441;</b></span>
				<input
					type="text"
					class="form-control"
					:class="{'notes': result}"
					aria-label="notes"
					aria-describedby="basic-addon4"
					:value="choiceNotes()"
				/>
			</div>
			<div class="input-group mb-3" v-else-if="!result">
				<span
					class="input-group-text operand btn-primary" id="basic-addon4"
					:class="{'inactive1': !result}"
				>
					<b>&#128441;</b>
				</span>
				<input
					type="text"
					class="form-control bg-secondary"
					:class="{'inactive2': !result}"
					:placeholder="placeholder4"
				/>
			</div>
			<!-- //,__</ NOTES>------------------------------>
			<!-- //, <ФИБОНАЧЧИ ОПЕРАНД1>-------------------------->
			<div class="input-group mb-3" v-if="result">
				<span class="input-group-text operand btn-primary" id="basic-addon4"><b>Ф1</b></span>
				<input
					type="text"
					class="form-control"
					:class="{'notes': result}"
					aria-label="notes"
					aria-describedby="basic-addon4"
					:value="fib1 + ' ( +- операнд )'"
				/>
			</div>
			<div class="input-group mb-3" v-else-if="!result">
				<span
					class="input-group-text operand btn-primary" id="basic-addon6"
					:class="{'inactive1': !result}"
				>
					<b>&#127845;</b>
				</span>
				<input
					type="text"
					class="form-control bg-secondary"
					:class="{'inactive2': !result}"
					:placeholder="placeholder7"
				/>
			</div>
			<!-- //, </ ФИБОНАЧЧИ ОПЕРАНД1>------------------------->
			<!-- //, <ФИБОНАЧЧИ ОПЕРАНД2>-------------------------->
			<div class="input-group mb-3" v-if="result">
				<span class="input-group-text operand btn-primary" id="basic-addon4"><b>Ф2</b></span>
				<input
					type="text"
					class="form-control"
					:class="{'notes': result}"
					aria-label="notes"
					aria-describedby="basic-addon4"
					:value="fib2 + ' ( +- операнд )'"
				/>
			</div>
			<div class="input-group mb-3" v-else-if="!result">
				<span
					class="input-group-text operand btn-primary" id="basic-addon4"
					:class="{'inactive1': !result}"
				>
					<b>&#127845;</b>
				</span>
				<input
					type="text"
					class="form-control bg-secondary"
					:class="{'inactive2': !result}"
					:placeholder="placeholder8"
				/>
			</div>
			<!-- //, </ ФИБОНАЧЧИ ОПЕРАНД2>------------------------->
			<!-- //, <ФИБОНАЧЧИ ИТОГО>------------------------------>
			<div class="input-group mb-3" v-if="result">
				<span class="input-group-text operand btn-primary" id="basic-addon4"><b>ФИ</b></span>
				<input
					type="text"
					class="form-control"
					:class="{'notes': result}"
					aria-label="notes"
					aria-describedby="basic-addon4"
					:value="fibResult"
				/>
			</div>
			<div class="input-group mb-3" v-else-if="!result">
				<span
					class="input-group-text operand btn-primary" id="basic-addon4"
					:class="{'inactive1': !result}"
				>
					<b>&#127845;</b>
				</span>
				<input
					type="text"
					class="form-control bg-secondary"
					:class="{'inactive2': !result}"
					:placeholder="placeholder6"
				/>
			</div>
			<!-- //, </ ФИБОНАЧЧИ ИТОГО>----------------------------->
			<!-- //,__<BUTTONS OPERATIONS>------------------------------>
			<div class="btn-group">
				<button
					class="btn btn-primary1"
					v-for="(operation, idx) in operations.symbols"
					:key="operation"
					:class="operations.classes[idx]"
					:title="operations.titles[idx]"
					@click="calculate(operation)"
					:disabled="result !== ''"
				>{{ operation }}
				</button>
			</div>
			<!-- //,__</ BUTTONS OPERATIONS>------------------------------>
			<!-- //,__<EXPLAINS>------------------------------>
			<ul class="text-list">
				<li>При нахождении квадратного корня числа 2-й операнд не требуется</li>
				<li>При нахождении значения дроби (1/x) 2-й операнд не требуется</li>
				<li>Значение Фибоначчи указано как сумма чисел Фибоначчи, вычисленных от значений операндов.</li>
				<li>Значение каждого операнда соответствует порядковому номеру определенного числа в числовом ряде Фибоначчи, т.е. числовой ряд Фибоначчи можно представить в виде массива, в котором значение операнда является индексом определенного значения в массиве.</li>
			</ul>
			<!-- //,__</ EXPLAINS>------------------------------>

		</div>
		<!-- //,__<LOGS>----------------------------------->
		<div class="logs">
			logs
			<br>
			<div v-for="(log, idx, value) in logs" :key="idx">
				<p>{{ idx }}~~{{ log }}~~{{ value }}</p>
			</div>
			<!--
			<div class="fib" id="fib">
				<p>fib1 = {{ fib1 }} | fib2 = {{ fib2 }}</p>
			</div>
			-->
		</div>	
		<!-- //,__<LOGS>----------------------------------->
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
			placeholder4: 'Примечания',
			placeholder5: 'Арифметическое действие',
			placeholder6: 'Фибоначчи итого',
			placeholder7: 'Фибоначчи операнд 1',
			placeholder8: 'Фибоначчи операнд 2',


			operand1: '',
			operand2: '',
			result: '',
			fibResult: 0,
			notes: '',
			typeOfOperations: '',
			operations: {
				symbols: ['+', '-', '/', '*', 'x^', 'ЦД', '(x)1/2',  '1/x'],
				titles: ['Сложение', 'Вычитание', 'Деление', 'Умножение', 'Степень числа', 'Целочисленное деление', 'Корень квадратный', 'Дробь'],
				classes: ['btn-warning', 'btn-info', 'btn-success', 'btn-primary', 'btn-secondary', 'btn-dark', 'btn-light', 'btn-primary'],
			}, 
			myCollection: ['1', '2', '3', '4', '5'],
			logs: {},
		};
	},
	watch: {},
	props: {
		msg: String,
	},
	methods: {
		fib(n) {
			return n <= 1 ? n : (this.fib(n-1) + this.fib(n-2));
		},
		calculate(operation = "default") {
			const {operand1, operand2} = this;
			switch(operation) {
				case '+':
					this.getAddition();
					this.typeOfOperations = this.operations.titles[0] + ': ' + '( ' + operation + ' )';
					break;
				case '-':
					this.getSubtraction();
					this.typeOfOperations = this.operations.titles[1] + ': ' + '( ' + operation + ' )';
					break;
				case '/':
					this.getDivision();
					this.typeOfOperations = this.operations.titles[2] + ': ' + '( ' + operation + ' )';
					break;
				case '*':
					this.getMultiple();
					this.typeOfOperations = this.operations.titles[3] + ': ' + '( ' + operation + ' )';
					break;
				case 'x^':
					this.getExponent();
					this.typeOfOperations = this.operations.titles[4] + ': ' + '( ' + operation + ' )';
					break;
				case 'ЦД':
					this.getDivision2();
					this.typeOfOperations = this.operations.titles[5] + ': ' + '( ' + operation + ' )';
					break;
				case '(x)1/2':
					this.getSquareR();
					this.typeOfOperations = this.operations.titles[6] + ': ' + '( ' + operation + ' )';
					break;
				case '1/x':
					this.getFract();
					this.typeOfOperations = this.operations.titles[7] + ': ' + '( ' + operation + ' )';
					break;
				default:
					alert('Введите требуемое арифметическое действие в блоке "case"!!!')
			}
			const key = Date.now();
			const value = `${operand1}${operation}${operand2} = ${this.result}`;
			this.$set(this.logs, key, value);
		},
		inputOperand1(event) {
			this.operand1 = event.target.value;
		},
		inputOperand2(event) {
			this.operand2 = event.target.value;
		},
		getAddition() {
			if(this.operand2 === 0 || this.operand1 === 0 || isNaN(this.operand2) || isNaN(this.operand1) || this.operand1 === '' || this.operand2 === '') {
				this.result = 'Ошибка ввода!!!'
			} else {
				this.result = this.operand1 + this.operand2;
				this.fibResult = this.fib1 + this.fib2;
			}
		},
		getSubtraction(){
			if(this.operand2 === 0 || isNaN(this.operand2) || isNaN(this.operand1) || this.operand1 === '' || this.operand2 === '' ) {
				this.result = 'Ошибка ввода!!!'
			} else {
				this.result = this.operand1 - this.operand2;
				this.fibResult = this.fib1 - this.fib2;
			}
		},
		getDivision() {
			let {operand1, operand2} = this;
			if(this.operand2 === 0 || isNaN(this.operand2) || isNaN(this.operand1) || this.operand1 === '' || this.operand2 === '' ) {
				this.result = 'Ошибка ввода!!!'
			} else {
				this.result = (operand1 / operand2).toFixed(5);
				this.fibResult = (this.fib1 / this.fib2).toFixed(5);
			}
		},
		getMultiple() {
			if(this.operand2 === 0 || isNaN(this.operand2) || isNaN(this.operand1) || this.operand1 === '' || this.operand2 === '' ) {
				this.result = 'Ошибка ввода!!!'
			} else {
				this.result = (this.operand1 * this.operand2).toFixed(5);
				this.fibResult = (this.fib1 * this.fib2).toFixed(5);
			}
		},
		getExponent() {
			if(this.operand2 === 0 || isNaN(this.operand2) || isNaN(this.operand1) || this.operand1 === '' || this.operand2 === '' ) {
				this.result = 'Ошибка ввода!!!'
			} else {
				this.result = (Math.pow(this.operand1, this.operand2)).toFixed(5);
				this.fibResult = (Math.pow(this.fib1, this.fib2)).toFixed(5);
			}
		},
		getDivision2() {
			if (this.operand2 === 0 || isNaN(this.operand2) || isNaN(this.operand1) || this.operand1 === '' || this.operand2 === '') {
				this.result = 'Ошибка ввода!!!';
			} else {
				this.result = Math.floor(this.operand1 / this.operand2);
				this.fibResult = Math.floor(this.fib1 / this.fib2);
			}
		},
		getSquareR() {
			if (isNaN(this.operand1) || this.operand1 === '') {
				this.result = 'Ошибка ввода!!!'
			} else {
				this.operand2 = '0';
				this.result = Math.pow(this.operand1, 0.5).toFixed(5);
				this.fibResult = Math.pow(this.fib1, 0.5).toFixed(5);
			}
		},
		getFract() {
			if (this.operand1 === 0 || isNaN(this.operand1) || this.operand1 === '') {
				this.result = 'Ошибка ввода!!!'
			} else {
				this.operand2 = '0';
				this.result = (1 / this.operand1).toFixed(5);
				this.fibResult = (1 / this.fib1).toFixed(5);
			}
		},
		getClean() {
			this.result = '';
			this.operand1 = this.placeholder1;
			this.operand2 = this.placeholder2;
		},
		choiceNotes() {
			if (this.result < 0) {
				this.notes='Отрицательное число!';
			} else if (this.result > 0 && this.result < 100) {
				this.notes='Число меньше ста!';
			} else if (this.result > 100) {
				this.notes='Число больше ста!';
			} else {
				this.notes = 'Примечаний нет...';
			}
			return this.notes;
		},
	},
	computed: {
		fib1() {
			return this.fib(this.operand1);
		},
		fib2() {
			return this.fib(this.operand2);
	}
	},
}
</script>
