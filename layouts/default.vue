<template>
    <a-layout>
        <a-layout-header>
            <a-row align="center">
                <a-col flex="200px">
                    <a-space>
                        <IdxLogo />
                    </a-space>
                </a-col>
                <a-col flex="auto">
                    <IdxTopMenu />
                </a-col>
                <a-col flex="140px" style="margin-right: 20px">
                    <a-space class="toolbar">
                        <IdxNotice />
                        <IdxToolbar />
                        <IdxDetails />
                    </a-space>
                </a-col>
            </a-row>
        </a-layout-header>
        <a-layout class="content">
            <IdxSideMenu />
            <IdxPageContent />
        </a-layout>
        <a-layout-footer>

        </a-layout-footer>
    </a-layout>
</template>
<style>
body {
    background-color: var(--color-bg-1);
    color: var(--color-text-1);
}
.tool-icon {
    font-size: 1.2rem;
    margin: 5px 10px;
    color: var(--color-text-2);
    :hover {
        color: var(--color-text-4);
        cursor: pointer;
    }
}
.toolbar {
    .arco-space-item {
        margin-right: 0 !important;
    }
}
.content {
    min-height: 960px;
}
</style>
