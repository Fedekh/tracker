<script setup>
import Header from './components/Header.vue';
import AddTransaction from './components/AddTransaction.vue';
import Balance from './components/Balance.vue';
import TransactionList from './components/TransactionList.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import { useToast } from 'vue-toastification';
import { ref, computed } from 'vue';


const toast = useToast();

const transactions = ref([
  { id: 1, text: 'Cash', amount: -700 },
  { id: 2, text: 'Paycheck', amount: 800 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: -150 }
]);

const total = computed(() => {
  let total = 0;
  transactions.value.forEach((transaction) => {
    total += transaction.amount;
  });
  return total;
})

const income = computed(() => {
  let income = 0;
  transactions.value.forEach((transaction) => {
    if (transaction.amount > 0) {
      income += transaction.amount;
    }
  });
  return income;
})

const expense = computed(() => {
  let expense = 0;
  transactions.value.forEach((transaction) => {
    if (transaction.amount < 0) {
      expense += transaction.amount;
    }
  });
  return expense;
})

const handleTransactionSubmited = (transactionData) => {
  console.log(transactionData);
  transactions.value.push(transactionData);
  toast.success('Transaction added!');
}

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);
  toast.success('Transaction deleted!');
}

</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <Balance :total="+total" />
      <IncomeExpense :income="+income" :expense="+expense" />
      <TransactionList :transactions @transactionDeleted="handleTransactionDeleted" />
      <AddTransaction @transactionSubmitted="handleTransactionSubmited" />
    </div>
  </div>
</template>

<style></style>
