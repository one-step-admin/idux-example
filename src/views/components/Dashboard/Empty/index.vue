<script lang="ts" setup>
import type { RadioData } from '@idux/components'
import type { SelectData } from '@idux/components/select'
import type { TableColumn } from '@idux/components/table'
import { IxTag } from '@idux/components/tag'

const inputValue = ref<string>('')

const radioValue = ref<string>('beijing')
const radioData: RadioData[] = [
  { key: 'beijing', label: 'Beijing' },
  { key: 'shanghai', label: 'Shanghai' },
  { key: 'guangzhou', label: 'Guangzhou' },
  { key: 'shenzhen', label: 'Shenzhen' },
]

const datePickerValue1 = ref(new Date())
const datePickerValue2 = ref(Date.now())
const datePickerValue3 = ref('2022-01')
const datePickerValue4 = ref('2022-Q1')
const datePickerValue5 = ref('2022')

const rateValue = ref<number>(2)

const selectValue1 = ref('lucy')
const selectValue2 = ref('lucy')
const selectOptions1 = ref<SelectData[]>([
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'disabled', label: 'Disabled', disabled: true },
  { value: 'yiminghe', label: 'Yiminghe' },
])
const selectOptions2 = ref<SelectData[]>([
  { value: 'lucy', label: 'Lucy' },
])

const sliderValue1 = ref<number>(0)
const sliderValue2 = ref<[number, number]>([20, 50])

const switchChecked = ref<boolean>(false)

interface Data {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

const columns: TableColumn<Data>[] = [
  {
    title: 'Name',
    dataKey: 'name',
    customCell: 'name',
  },
  {
    title: 'Age',
    dataKey: 'age',
  },
  {
    title: 'Address',
    dataKey: 'address',
  },
  {
    title: 'Tags',
    dataKey: 'tags',
    customCell: ({ value }: any) =>
      value.map((tag: string) => {
        let color = tag.length > 5 ? 'warning' : 'success'
        if (tag === 'loser') {
          color = 'error'
        }
        return h(IxTag, { color }, { default: () => tag.toUpperCase() })
      }),
  },
  {
    title: 'Action',
    key: 'action',
    customCell: 'action',
  },
]

const data: Data[] = []
for (let index = 0; index < 100; index++) {
  data.push({
    key: index,
    name: `Edrward ${index}`,
    age: 18 + index,
    address: `London Park no. ${index}`,
    tags: ['nice', 'developer'],
  })
}
</script>

<template>
  <div class="empty-container">
    <PageHeader>
      <template #title>
        <div class="flex items-center gap-4">
          欢迎使用 Fantastic-admin
        </div>
      </template>
      <template #content>
        <div class="text-sm/6">
          本演示站基于 Fantastic-admin 源码开发，将 Element Plus 替换为 iDux ，详细操作步骤请阅读官方文档。
        </div>
      </template>
    </PageHeader>
    <PageMain>
      <IxSpace align="center">
        <IxButton mode="primary">
          Primary
        </IxButton>
        <IxButton>Default</IxButton>
        <IxButton mode="dashed">
          Dashed
        </IxButton>
        <IxButton mode="text">
          Text
        </IxButton>
        <IxButton mode="link" href="https://github.com/IDuxFE/idux" target="_blank">
          Link
        </IxButton>
      </IxSpace>
    </PageMain>
    <PageMain>
      <IxSpace vertical style="width: 200px;">
        <IxInput v-model:value="inputValue" placeholder="Basic usage" />
        <IxInput :value="inputValue" disabled placeholder="Disabled" />
        <IxInput :value="inputValue" readonly placeholder="Readonly" />
      </IxSpace>
    </PageMain>
    <PageMain>
      <IxRadioGroup v-model:value="radioValue" :data-source="radioData" />
    </PageMain>
    <PageMain>
      <IxSpace vertical style="width: 200px;">
        <IxDatePicker v-model:value="datePickerValue1" clearable />
        <IxDatePicker v-model:value="datePickerValue2" type="week" clearable />
        <IxDatePicker v-model:value="datePickerValue3" type="month" clearable />
        <IxDatePicker v-model:value="datePickerValue4" type="quarter" clearable />
        <IxDatePicker v-model:value="datePickerValue5" type="year" clearable />
      </IxSpace>
    </PageMain>
    <PageMain>
      <IxRate v-model:value="rateValue" />
    </PageMain>
    <PageMain>
      <IxSpace vertical style="width: 200px;">
        <IxSelect v-model:value="selectValue1" :data-source="selectOptions1" />
        <IxSelect v-model:value="selectValue2" :data-source="selectOptions2" disabled />
      </IxSpace>
    </PageMain>
    <PageMain>
      <IxSlider v-model:value="sliderValue1" />
      <IxSlider v-model:value="sliderValue2" range />
    </PageMain>
    <PageMain>
      <IxSwitch v-model:checked="switchChecked" />
    </PageMain>
    <PageMain>
      <IxTable :columns="columns" :data-source="data">
        <template #name="{ value }">
          <IxButton mode="link">
            {{ value }}
          </IxButton>
        </template>
        <template #action="{ record }">
          <IxButtonGroup :gap="8" mode="link" separator="|">
            <IxButton>Invite {{ record.name }}</IxButton>
            <IxButton>Delete</IxButton>
          </IxButtonGroup>
        </template>
      </IxTable>
    </PageMain>
  </div>
</template>

<style lang="scss" scoped>
.empty-container {
  height: 100%;
  overflow: auto;

  .page-main {
    margin-bottom: 20px;
  }
}
</style>
