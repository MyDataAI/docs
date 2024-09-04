---
title: 什么是lLangChain4J
order: 1
---

> LangChain4J是一个为Java开发者设计的AI应用层框架，用于将大语言模型（LLMs）快速集成到Java应用中。它借鉴了Python生态中的LangChain框架，支持与主流语言模型和向量存储系统的交互，并能与Quarkus 和 Spring Boot集成，是Java生态中关于大语言模型部分的重要框架，本篇文章一起来快速了解一下LangChain4J。

# 什么是langchain
要理解 LangChain4J，首先需要了解其基础——LangChain。

LangChain 是一个专为构建基于大语言模型（LLMs）应用程序的框架。它不仅帮助开发者轻松地将 LLMs 集成到应用程序中，还提供了一整套工具和组件，使这些模型的集成更加高效和便捷，从而大幅度加快基于大模型应用的开发进程。

LangChain 提供了一系列标准接口，支持将不同的 LLMs 连接在一起，并与其他工具和数据源进行集成。此外，LangChain 还为常见应用场景提供了端到端的解决方案，例如聊天机器人、文档分析和代码生成。自Harrison Chase 于 2022 年 10 月发布这个开源项目以来，LangChain 已迅速成为LLM开发中最受欢迎的框架之一，兼容各种领先的 LLMs。可惜的是，LangChain只支持Python和JavaScript，

# 为什么要使用 LangChain？

作为基于大模型的应用开发者，为什么要选择LangChain呢？LangChain帮我们做了如下事情：
1. **API调用**
   - **接口集成**：LangChain 提供了一个统一的接口，简化了对多种模型的集成。开发者只需熟悉 LangChain 的 API，即可轻松连接不同的模型。
   - **Token管理**：LangChain 帮助开发者跟踪每次 API 调用的 Token 使用情况，方便管理成本并优化资源利用。

2. **提示词（Prompts）**
   - **提示模板**：LangChain 允许创建灵活的提示模板，支持动态变量插入，确保生成的文本能够满足具体需求。
   - **提示优化**：提供优化工具，提升生成结果的质量和相关性，确保更高的输出准确度。

3. **记忆（Memory）**
   - **短期记忆**：保存单次对话或操作中的上下文信息，确保模型在同一对话中保持连贯性。
   - **长期记忆**：保留多次会话中的关键信息，使模型能够回忆过去的交互，提供更加个性化的体验。

4. **对话管理（Conversation Management）**
   - **多轮对话**：支持对多轮对话的上下文跟踪，使模型能够理解并回应连续的问题和请求。
   - **对话控制**：允许开发者在对话中设置关键节点，如重定向、总结或打断当前流程，提升用户体验。

5. **工具集成（Tool Integration）**
   - **数据库查询**：通过自然语言生成 SQL 查询，直接从数据库中获取所需数据。
   - **API 调用**：集成第三方 API，允许模型从外部数据源获取信息或执行操作。
   - **文档检索**：支持从大规模文档库中检索相关内容，结合语言模型生成更精准的响应。

6. **输出控制（Output Parsers）**
   - **结构化输出**：将生成的文本解析为结构化数据，如 JSON 格式，便于进一步处理。
   - **自定义解析器**：允许开发者定义自定义输出解析器，以适应特定格式或类型的需求。

7. **代理（Agents）**
   - **行动代理**：根据用户输入或特定条件，自动选择并执行预设操作（如查询数据库、调用 API）。
   - **代理工具**：集成多种工具和 API，构建复杂的任务处理代理，提升应用的智能化程度。

8. **流（Streams）**
   - **流处理**：支持流式处理大型文本数据或多步骤任务，使长文本处理或连续输出任务更加高效。
   - **实时更新**：在长时间任务或持续对话中提供实时更新和结果输出，确保用户获得最新信息。

9. **模板化（Templates）**
   - **任务模板**：提供预设模板，简化开发流程，如问答系统、文档生成等常见任务。
   - **自定义模板**：开发者可以创建并共享自己的模板，满足特定业务需求。
10. **部署与集成**
   - **多模型支持**：无缝集成多个语言模型提供商（如 OpenAI, Hugging Face），增强应用的灵活性。
   - **本地部署**：支持模型在本地环境中部署，满足数据隐私和安全的需求。
11. **分析与监控（Analytics & Monitoring）**
   - **使用分析**：跟踪并分析模型的使用情况，如调用频率、响应时间、成功率等，帮助开发者优化应用。
   - **错误处理与日志**：记录并处理模型生成的错误和异常，帮助开发者调试并优化应用。
12. **链（Chains）**
   - **简单链**：将多个语言模型调用按顺序连接，形成处理流程。每个步骤的输出可以作为下一个步骤的输入。
   - **复杂链**：支持分支和并行处理等复杂逻辑，开发者可以创建更具逻辑性的工作流程。

> 需要注意的是，使用链（Chain）并非必须，开发者可以根据需要自定义逻辑，而不必依赖 Chain 功能。Chain功能相对死板，在LangChain4J中，已经不建议使用Chain。

想象如果没有 LangChain，开发者将需要自己构建和集成所有这些功能，这不仅耗时耗力，还容易出现错误。此外，开发者必须深入了解各个语言模型的API、优化提示词、管理对话上下文以及集成外部工具和数据库等。LangChain 简化了这些流程，使得开发者能够更专注于应用的核心功能开发，使开发者能够更快、更高效地构建基于大语言模型的应用。

**因此，LangChain是一个非常重要的AI应用开发框架，其重要性相当于Java生态体系中的Spring。**

# LangChain4J的诞生

正如前文所言， LangChain作为AI应用开发最重要的框架，其支持的语言是Python在和JavaScript。而Java作为企业级应用的首选语言，基于Java的AI应用开发框架怎么能缺席？

**为了填补Java生态中缺乏类似 LangChain 的框架这一空白，LangChain4J 应运而生。**

LangChain4J极大的吸收LangChain的设计精神，并汲取Haystack与LlamaIndex部分设计，以便尽可能让LangChain4J能赶上langchain。从2023年初项目启动到如今，LangChain4J一直在持续更新，并且集成了诸多AI框架。因此在Java生态要基于大模型做应用，LangChain4J是绝对绕不过去的一个选择。 
> 另外一个选择就是SpringAI(https://spring.io/projects/spring-ai)

LangChain4J的官网地址为：https://docs.langchain4j.dev 。



# LangChain4J的基本功能

LanChain4J给应用开发者最重要的一个启发是如何更加优雅的调用各种大模型以及串联逻辑。当然，LanChain4J本身已经实现的功能也不容忽视，下面就来看看LanChain4J本身已经做了哪些功能。
## 轻松与 LLM进行交互
LangChain4J支持所有主要的商业和开源 LLM。 并且都可以通过LanChain4J所抽象的统一的 API 轻松访问，从而能能够构建聊天机器人、助手等。目前已经支持的LLM模型包括：

| Provider                                                               | 流式调用 | 可用工具 | 输入模态   | Local                                                   | Native |
|------------------------------------------------------------------------|--------------------------------------------|---------------------------|--------------------------------|---------------------------------------------------------|--------|
| [Amazon Bedrock](/integrations/language-models/amazon-bedrock)         |                                            |                           | text                           |                                                         |        |
| [Anthropic](/integrations/language-models/anthropic)                   | ✅                                          | ✅                         | text, image                    |                                                         | ✅      |
| [Azure OpenAI](/integrations/language-models/azure-open-ai)            | ✅                                          | ✅                         | text, image                    |                                                         |        |
| [ChatGLM](/integrations/language-models/chatglm)                       |                                            |                           | text                           |                                                         |        |
| [DashScope](/integrations/language-models/dashscope)                   | ✅                                          | ✅                         | text, image                    |                                                         |        |
| [Google Vertex AI Gemini](/integrations/language-models/google-gemini) | ✅                                          | ✅                         | text, image, audio, video, PDF |                                                         |        |
| [Google Vertex AI PaLM 2](/integrations/language-models/google-palm)   |                                            |                           | text                           |                                                         | ✅      |
| [Hugging Face](/integrations/language-models/hugging-face)             |                                            |                           | text                           |                                                         |        |
| [Jlama](/integrations/language-models/jlama)                           | ✅                                          |                           | text                           | ✅                                                       | ✅      |
| [LocalAI](/integrations/language-models/local-ai)                      | ✅                                          | ✅                         | text                           | ✅                                                       |        |
| [Mistral AI](/integrations/language-models/mistral-ai)                 | ✅                                          | ✅                         | text                           |                                                         |        |
| [Ollama](/integrations/language-models/ollama)                         | ✅                                          | ✅                         | text, image                    | ✅                                                       |        |
| [OpenAI](/integrations/language-models/open-ai)                        | ✅                                          | ✅                         | text, image                    | Compatible with: Groq, Ollama, LM Studio, GPT4All, etc. | ✅      |
| 百度千帆                 | ✅                                          | ✅                         | text                           |                                                         |        |
| [Cloudflare Workers AI](/integrations/language-models/workers-ai)      |                                            |                           | text                                                                                   |        |
| 智普 AI                 | ✅                                          | ✅                         | text, image                    |                                                      
> Local:指的是模型或框架是否支持在本地环境中运行，而不依赖于云端服务。这通常意味着用户可以在自己的硬件（例如个人电脑、服务器）上运行模型
> Native:通常指的是模型或框架是否可以直接在特定平台或环境中以“本地”的方式运行。换句话说，它是否为某个平台（例如某个操作系统、硬件架构或编程语言环境）量身定制，从而能以高效、优化的方式执行，而无需额外的兼容层或中间件。
## 轻松与和 Vector Stores 交互
Vector Stores是一种用于存储和管理向量化表示（即嵌入向量，Embeddings）的数据结构或数据库。它们在机器学习、自然语言处理和其他需要处理高维向量的领域中被广泛使用。LangChain4J支持所有主要 Vector Store， 都可以通过统一的 API 轻松访问，以便快速存储向量，比较常用的包括：
 * In-memory（纯内存）
 * Cassandra
 * Elasticsearch
 * Milvus
 * OpenSearch
 * PGVector（Pgsql的向量库插件）

### Embedding Model
嵌入式模型（Embedding Model）是一类机器学习模型，它将高维或复杂的数据（如单词、句子、图像等）转换为低维向量（即嵌入向量）。这些向量表示数据的某些特征或语义，使得在嵌入空间中，相似的数据点具有相近的向量表示。这些模型在自然语言处理、计算机视觉和推荐系统等领域中被广泛使用，最广泛的就是知识库检索——搜索近似的问题。
LangChain4J支持多种Embedding Model，常见的包括：
* Azure OpenAI
* OpenAI
* Qianfan
* Zhipu
* Ollama
## Scoring-Reranking-Models
Scoring-Reranking Models 是一种在信息检索、推荐系统和自然语言处理等领域中使用的模型，用于对初步检索或推荐的结果进行重新排序，以提高最终输出的质量。这类模型通常在搜索引擎、问答系统和推荐算法中广泛应用。
LangChain4J支持：
* Jina
* Cohere

## Image Models
* OpenAI Dall·E
* Google Imagen
* Cloudflare Workers AI
* Zhipu AI

## 基础AI服务、RAG、工具箱
从低级提示模板、聊天内存管理、输出解析到 RAG、代码执行引擎、常见LLM使用的工具箱（或者函数调用），LangChain4J都做了实现。

## 集成Quarkus和Spring Boot 
LangChain4J集成了 Quarkus 和 Spring Boot，并且LLM和Java之间是双向集成：可以从 Java 调用 LLM，并允许 LLM 反过来调用Java 代码。



# Lanchain4J源码编译
因为langchain4j的源码很清晰，从项目结构基本上就可以看到langchain4j集成了哪些AI模型，因此LangChain4J从上手难度讲并不复杂，可以从Github下载[源码](https://github.com/langchain4j/langchain4j)了解大概。



## 本地编译
* 1.源码下载以后，先要`mvn clean install`编译`langchain-core`，不能跳过测试
因为在其他的项目中依赖了如下的test包，这种配置本地打包,否则无法编译通过：
```xml
<dependency>
            <groupId>dev.langchain4j</groupId>
            <artifactId>langchain4j-core</artifactId>
            <classifier>tests</classifier>
            <type>test-jar</type>
            <scope>test</scope>
        </dependency>
```
  
* 2.当langchaincore编译完成以后，使用mvn clean install maven test.skip=true编译所有项目。

* 3.刷新ide：通过 invalide caches 来让idea识别，如果还不行，直接删除.iml文件，重新进入即可。
 

 # Lanchain4J快速开始
 下面来演示一下Lanchain4J如何快速调用LLM，只需要几行代码便可集成：
 ```java
 public class ChatLanguageDemo {

    public static void main(String[] args) {
        ChatLanguageModel model = AzureOpenAiChatModel.builder()
                .endpoint("#Your Endpoint")
                .apiKey("#API KEY")
                .deploymentName("#Azure Deployment Name")
                .temperature(0.3)
                .logRequestsAndResponses(true)
                .serviceVersion("2024-02-01")
                .build();
        System.out.println(model.generate("介绍一下自己"));
    }
}
```
 当然，效果最好的大模型显然是`OpenAPI`的`ChatGPT`，但是其`OpenAPI`对限制了对中国的开放，但是微软的`Azure Open AI`服务却没有限制，
 因此，我们完全可以使用`Azure Open AI`代替其`OPENAPI`的官方服务。当然，我们也可以使用智普、阿里通义千问、商汤商量等国产大模型。

