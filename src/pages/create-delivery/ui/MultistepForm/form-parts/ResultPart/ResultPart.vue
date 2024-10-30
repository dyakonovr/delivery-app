<script setup lang="ts">
import { CustomTypography } from "@/shared/ui";
import ResultItem from "@/pages/create-delivery/ui/MultistepForm/form-parts/ResultPart/ResultPartItem.vue";
import { formatDeliveryPrice, formatDeliveryTime } from "@/entities/delivery";

interface Props {
  title: string;
  blocks: {
    title: string;
    items: {
      subtitle: string;
      value: string;
    }[];
    formStep: number;
  }[];
  isDialogShowed: boolean;
  onDialogClose?: () => void;
  onDialogSubmit?: () => void;
}

defineProps<Props>();
</script>

<template>
  <div class="result_part">
    <custom-typography variant="title">{{ title }}</custom-typography>

    <template v-for="block in blocks" :key="block.title">
      <result-item
        :title="block.title"
        :items="block.items"
        :form-step="block.formStep"
      />
    </template>

    <div>
      <custom-typography variant="title" tag="p">
        Итого: {{ // formatDeliveryPrice(option.price) }} &#8381;
      </custom-typography>
      <custom-typography variant="regular" tag="p">
        Тариф:{{ " " }}
        <custom-typography
          variant="regular"
          tag="p"
          className="first-letter-big"
          :style="{ display: 'inline-block' }"
        >
          <!--          {{ option.name }}-->
        </custom-typography>
      </custom-typography>
      <custom-typography variant="regular" tag="p">
        <!--        Срок: {{ formatDeliveryTime(option.days) }}-->
      </custom-typography>
    </div>
  </div>

  <!--  <Dialog-->
  <!--    icon={"success"}-->
  <!--    title="Заявка отправлена"-->
  <!--    description="Вы можете оплатить ваш заказ в разделе «Профиль»"-->
  <!--    isOpened={isDialogShowed}-->
  <!--    onCloseClick={onDialogClose}-->
  <!--    footerButtons={-->
  <!--  <Button variant={"contained"} color={"primary"} onClick={onDialogSubmit}>-->
  <!--    Посмотреть статус-->
  <!--  </Button>-->
  <!--  }-->
  <!--  />-->
</template>

<style scoped></style>
