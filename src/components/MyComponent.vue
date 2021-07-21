<template>
  <div class="root">
    <div class="container">
      <form class="form" v-if="!registrationPassed" @submit.prevent="checkForm">
        <fieldset class="client-info attribute">
          <legend>Атрибуты формы:</legend>

          <label for="surname">
            <input
              type="text"
              id="surname"
              autocomplete="off"
              class="surname"
              :class="$v.form.surname.$error ? 'is-invalid' : ''"
              v-model="form.surname"
              placeholder="Фамилия*"
            />
            <p v-if="!$v.form.surname.required" class="invalid-feedback">
              Обязательное поле
            </p>
          </label>

          <label for="name">
            <input
              type="text"
              id="name"
              :class="$v.form.birthday.$error ? 'is-invalid' : ''"
              v-model="form.name"
              placeholder="Имя*"
            />
            <p v-if="!$v.form.name.required" class="invalid-feedback">
              Обязательное поле
            </p>
          </label>

          <label for="lastname">
            <input
              type="text"
              id="lastname"
              class="lastname"
              :class="$v.form.lastname.$error ? 'is-invalid' : ''"
              v-model="form.lastname"
              placeholder="Отчество"
            />
            <p v-if="!$v.form.lastname.required" class="invalid-feedback">
              Обязательное поле
            </p>
          </label>

          <label for="birthday">
            <input
              type="number"
              id="birthday"
              v-model="form.birthday"
              :class="$v.form.birthday.$error ? 'is-invalid' : ''"
              placeholder="Дата рождения*"
            />
            <p v-if="!$v.form.birthday.required" class="invalid-feedback">
              Обязательное поле
            </p>
          </label>

          <label for="phone">
            <input
              type="number"
              id="phone"
              autocomplete="off"
              :class="$v.form.phone.$error ? 'is-invalid' : ''"
              v-model="form.phone"
              placeholder="Номер телефона*"
            />
            <p
              v-if="
                !$v.form.phone.minLength ||
                !$v.form.phone.required ||
                !$v.form.phone.maxLength
              "
              class="invalid-feedback"
            >
              Должно быть больше 7-и и меньше 11-и цифр
            </p>
          </label>

          <label for="">
            <input type="text" id="sex" v-model="form.sex" placeholder="Пол" />
          </label>

          <label for="clients-group">
            группа клиентов*
            <select
              multiple
              size="3"
              id="clients-group"
              :class="$v.form.phone.$error ? 'is-invalid' : ''"
              v-model="form.clients"
            >
              <option
                v-for="(clients, index) in clientsData"
                selected
                :value="clients.value"
                :key="index"
              >
                {{ clients.label }}
              </option>
            </select>
            <p v-if="!$v.form.clients.required" class="invalid-feedback">
              Выберите категорию
            </p>
          </label>

          <label>
            Лечащий врач
            <select id="doctor" v-model="form.doctor">
              <option
                v-for="(doctor, index) in doctors"
                :value="doctor.value"
                :key="index"
              >
                {{ doctor.value }}
              </option>
            </select>
          </label>
          <label for="checkbox" class="check-label">
            Не отправлять СМС.
            <input
              id="checkbox"
              v-model="form.checked"
              value="true"
              type="checkbox"
            />
          </label>
        </fieldset>

        <fieldset class="client-info">
          <legend>Адрес:</legend>

          <label for="">
            <input
              type="text"
              id="index"
              v-model="form.address"
              placeholder="Индекс"
            />
          </label>

          <label for="">
            <input
              type="text"
              id="country"
              v-model="form.country"
              placeholder="Страна"
            />
          </label>

          <label for="">
            <input
              type="text"
              id="region"
              v-model="form.region"
              placeholder="Область"
            />
          </label>

          <label for="">
            <input
              type="text"
              id="city"
              v-model="form.city"
              :class="$v.form.city.$error ? 'is-invalid' : ''"
              placeholder="Город*"
            />
            <p v-if="!$v.form.city.required" class="invalid-feedback">
              Обязательное поле
            </p>
          </label>

          <label for="">
            <input
              type="text"
              id="street"
              v-model="form.street"
              :class="$v.form.street.$error ? 'is-invalid' : ''"
              placeholder="Улица*"
            />
            <p v-if="!$v.form.street.required" class="invalid-feedback">
              Обязательное поле
            </p>
          </label>

          <label for="">
            <input
              type="text"
              id="house"
              v-model="form.house"
              placeholder="Дом"
            />
          </label>
        </fieldset>

        <fieldset class="client-info">
          <legend>Паспорт:</legend>
          <label for="type-doc">
            Тип документа*.
            <select
              id="type-doc"
              :class="$v.form.docs.$error ? 'is-invalid' : ''"
              v-model="form.docs"
            >
              <option v-for="(docs, index) in documents" :key="index">
                {{ docs }}
              </option>
            </select>
            <p v-if="!$v.form.docs.required" class="invalid-feedback">
              Обязательное поле
            </p>
          </label>

          <label for="">
            <input
              type="text"
              id="series"
              v-model="form.series"
              placeholder="Серия"
            />
          </label>

          <label for="">
            <input
              type="text"
              id="number"
              v-model="form.number"
              placeholder="Номер"
            />
          </label>

          <label for="">
            <input
              type="text"
              id="issued"
              v-model="form.issue"
              placeholder="Кем выдан"
            />
          </label>

          <label for="">
            <input
              type="text"
              id="date-issued"
              v-model="form.created"
              placeholder="Дата выдачи*"
              :class="$v.form.created.$error ? 'is-invalid ' : ''"
            />
            <p v-if="!$v.form.created.required" class="invalid-feedback">
              Обязательное поле
            </p>
          </label>
        </fieldset>
        <button
          type="submit"
          value="submit"
          :disabled="$v.$invalid"
          class="btn"
        >
          Отправить
        </button>
      </form>

      <div class="access" v-else>
        <h1 style="text-align: center">
          {{ `${form.name}, поздравляем вы успешно зарегистрированы!` }}
        </h1>
      </div>
    </div>
  </div>
</template>


<script>
import { validationMixin } from "vuelidate";

import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "Mycomponent",

  data() {
    return {
      registrationPassed: false,
      form: {
        surname: "",
        name: "",
        lastname: "",
        birthday: "",
        phone: "",
        sex: "",
        docs: [],
        doctor: ["Иванов"],
        clients: ["VIP"],
        checked: false,
        country: "",
        street: "",
        house: "",
        region: "",
        city: "",
        address: "",
        series: "",
        number: "",
        created: "",
      },
      documents: ["Паспорт", " Свидетельство о рождении", "Вод. удостоверение"],
      clientsData: [
        { label: "VIP", value: "vip" },
        { label: "Проблемные", value: "problems" },
        { label: "ОМС", value: "insurance" },
      ],
      doctors: [
        { label: "Иванов", value: "Иванов" },
        { label: "Захаров", value: "Захаров" },
        { label: "Чернышева", value: "Чернышева" },
      ],
    };
  },
  validations: {
    form: {
      surname: {
        required,
      },
      lastname: {
        required,
      },
      name: {
        required,
      },
      birthday: {
        required,
      },
      phone: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(11),
      },
      city: {
        required,
      },
      street: {
        required,
      },
      created: {
        required,
      },
      clients: {
        required,
      },
      docs: {
        required,
      },
    },
  },
  methods: {
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        this.registrationPassed = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  background: whitesmoke;
}
.access {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 24px;
}
input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}

.invalid-feedback {
  color: red;
}

.check-label {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
}

label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.container {
  max-width: 400px;
  margin: 0 auto;
}
legend {
  color: #000;
  font-size: 24px;
}
.btn:disabled {
  color: rgba(255, 255, 255, 0.3);
  cursor: no-drop;
  background-color: rgba(42, 97, 218, 0.384);
  border-color: rgba(118, 118, 118, 0.3);
}
.client-info {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 0 auto;
  margin-bottom: 50px;
  border-radius: 14px;
  background-color: rgb(183, 160, 202);
  border: none;
}

.client-info input,
.client-info select {
  max-width: 350px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
label {
  display: flex;
  justify-content: space-between;
}
#checkbox {
  cursor: pointer;
}
#type-doc {
  max-width: 200px;
}

.btn {
  display: block;
  margin: 0 auto;
  border: none;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s ease-in-out all;
}

.btn:hover {
  background: #0ec2c2;
  color: #fff;
}

.overlay {
  display: block;
  margin: 0 auto;
}
</style>