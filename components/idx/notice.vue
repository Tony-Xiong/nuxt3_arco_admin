<template>
    <a-popover position="bottom" :style="{width: '300px'}">
        <p class="tool-icon">
            <ABadge :count="9" dot :dotStyle="{ width: '8px', height: '8px' }">
                <IconNotification />
            </ABadge>
        </p>
        <template #content>
            <a-tabs>
                <a-tab-pane key="1">
                    <template #title>
                        <icon-calendar/> Tab 1
                    </template>
                    <a-list>
                        <a-list-item>
                            <a-list-item-meta
                                    title="Ant Design Title 1"
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                    title="Ant Design Title 2"
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                    title="Ant Design Title 3"
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                    title="Ant Design Title 4"
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                    </a-list>
                </a-tab-pane>
                <a-tab-pane key="2">
                    <template #title>
                        <icon-clock-circle/> Tab 2
                    </template>
                    <a-list>
                        <a-list-item>
                            <a-list-item-meta
                                title="Ant Design Title 5"
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                title="Ant Design Title 6"
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                title="Ant Design Title 7"
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                title="Ant Design Title 8"
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                    </a-list>
                </a-tab-pane>
                <a-tab-pane key="3">
                    <template #title>
                        <icon-user/> Tab 3
                    </template>
                    <a-list>
                        <a-list-item>
                            <a-list-item-meta
                                title="Ant Design Title 9"
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                title="Ant Design Title 10"
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                title="Ant Design Title 11"
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                        <a-list-item>
                            <a-list-item-meta
                                title="Ant Design Title 12"
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </a-list-item>
                    </a-list>
                </a-tab-pane>
            </a-tabs>
        </template>
    </a-popover>
</template>
<script setup lang="ts">
</script>