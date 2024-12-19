"use client"
import Link from "next/link";
import React from "react";

const IndexPage: React.FC = () => {
  // 复制链接功能
  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("链接已复制到剪贴板！");
      })
      .catch(() => {
        alert("复制链接失败，请手动复制。");
      });
  };

  // 打开功能（跳转至当前页面）
  const handleOpen = () => {
    window.open(window.location.href, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* 页面标题 */}
        <h1 className="text-4xl font-bold mb-4">Data Analyst</h1>


        {/* 描述与按钮 */}
        <div className="flex items-start justify-between mb-6">
          {/* 描述 */}
          <p className="text-gray-500 text-lg flex-1">
            数据分析助手，快速提升表格处理速度，一问一答，无需记公式，秒出分析结果。
          </p>

          {/* 按钮部分 */}
          <div className="flex gap-2 ml-4">
            <button
              onClick={handleShare}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              分享
            </button>
            {/* <button
              onClick={handleOpen}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              打开
            </button> */}
            <Link href={"/"}>
            打开
            </Link>
          </div>
        </div>

        {/* 功能描述 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">功能概述</h2>
          <p className="text-gray-700">
            我是
            <strong>Data Analyst</strong>
            ，您的贴身数据小助手，帮您轻松搞定数据分析，让数据变得简单易懂，助力您的工作和学习！
          </p>
        </div>

        {/* 能力清单 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">能力清单</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>数据整理：</strong>把混乱的数据表变得井井有条，支持处理 Excel、CSV、JSON 等格式数据。
            </li>
            <li>
              <strong>图表制作：</strong>用漂亮的图表说故事，一目了然，折线图、柱形图、饼图轻松制作。
            </li>
            <li>
              <strong>公式助手：</strong>不需要记复杂公式，一问一答，快速搞定数据背后的小秘密。
            </li>
            <li>
              <strong>趋势挖掘：</strong>预测销量、查趋势、把未来看清。
            </li>
            <li>
              <strong>数据摘要：</strong>数据去重、合并、补充遗漏无烦恼，只留下有用的信息。
            </li>
            <li>
              <strong>简介易读：</strong>将数据转成故事，复杂表格的描述得简单明了。
            </li>
          </ul>
        </div>

        {/* 使用场景 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">使用场景</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>企业分析：用数据驱动市场活动决策，趋势略词调整。</li>
            <li>财务分析：通过数据可视化快速梳理运营情况。</li>
            <li>学生研究：进行学术研究，数据支撑论文写作。</li>
            <li>个人生活：分析消费习惯，帮助理财与决策。</li>
            <li>职场小帮手：数据驱动提升工作效率。</li>
            <li>小白用户：任何基础随时上手。</li>
          </ul>
        </div>

        {/* 使用提示 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">使用提示：</h2>
          <p className="text-gray-700">如果您有任何基础，数据分析变简单了！</p>
        </div>


      </div>
    </div>
  );
};

export default IndexPage;
