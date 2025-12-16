import { Question } from './types';

export const QUESTIONS: Question[] = [
    {
        "id": 1,
        "category": "Spring",
        "type": "single",
        "text": "Spring框架的核心特性不包括以下哪项？（ ）",
        "options": [
            {
                "id": "1-A",
                "label": "A",
                "text": "控制反转（IoC）"
            },
            {
                "id": "1-B",
                "label": "B",
                "text": "面向切面编程（AOP）"
            },
            {
                "id": "1-C",
                "label": "C",
                "text": "自动事务管理"
            },
            {
                "id": "1-D",
                "label": "D",
                "text": "底层数据库连接池实现"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>Spring核心是IoC和AOP，事务管理是其重要功能，但数据库连接池通常依赖第三方（如HikariCP），非Spring底层实现。"
    },
    {
        "id": 2,
        "category": "Spring",
        "type": "single",
        "text": "以下哪种不是Spring依赖注入（DI）的实现方式？（ ）",
        "options": [
            {
                "id": "2-A",
                "label": "A",
                "text": "构造函数注入"
            },
            {
                "id": "2-B",
                "label": "B",
                "text": "setter方法注入"
            },
            {
                "id": "2-C",
                "label": "C",
                "text": "接口注入"
            },
            {
                "id": "2-D",
                "label": "D",
                "text": "注解注入（@Autowired）"
            }
        ],
        "correctAnswer": "C",
        "explanation": "接口注入是早期DI方式，Spring虽支持但不推荐，主流为构造函数、setter和注解注入。"
    },
    {
        "id": 3,
        "category": "Spring",
        "type": "single",
        "text": "Spring中，Bean的默认作用域是（ ）",
        "options": [
            {
                "id": "3-A",
                "label": "A",
                "text": "prototype"
            },
            {
                "id": "3-B",
                "label": "B",
                "text": "singleton"
            },
            {
                "id": "3-C",
                "label": "C",
                "text": "request"
            },
            {
                "id": "3-D",
                "label": "D",
                "text": "session"
            }
        ],
        "correctAnswer": "F",
        "explanation": "默认作用域为singleton（单例），容器中仅存在一个实例；prototype为原型，每次获取创建新实例。"
    },
    {
        "id": 4,
        "category": "Spring",
        "type": "single",
        "text": "`@Autowired`注解默认的注入方式是（ ）",
        "options": [
            {
                "id": "4-A",
                "label": "A",
                "text": "按名称注入"
            },
            {
                "id": "4-B",
                "label": "B",
                "text": "按类型注入"
            },
            {
                "id": "4-C",
                "label": "C",
                "text": "按构造函数注入"
            },
            {
                "id": "4-D",
                "label": "D",
                "text": "按接口注入"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@Autowired`默认按类型匹配，若存在多个同类型Bean，需配合`@Qualifier`按名称注入。"
    },
    {
        "id": 5,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`ApplicationContext`相比`BeanFactory`的优势不包括（ ）",
        "options": [
            {
                "id": "5-A",
                "label": "A",
                "text": "支持国际化"
            },
            {
                "id": "5-B",
                "label": "B",
                "text": "支持事件发布"
            },
            {
                "id": "5-C",
                "label": "C",
                "text": "延迟加载Bean"
            },
            {
                "id": "5-D",
                "label": "D",
                "text": "预加载单例Bean"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>BeanFactory是延迟加载（getBean时创建），ApplicationContext是预加载单例Bean，C是BeanFactory的特点。"
    },
    {
        "id": 6,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个注解用于指定Bean的初始化方法？（ ）",
        "options": [
            {
                "id": "6-A",
                "label": "A",
                "text": "`@PostConstruct`"
            },
            {
                "id": "6-B",
                "label": "B",
                "text": "`@PreDestroy`"
            },
            {
                "id": "6-C",
                "label": "C",
                "text": "`@InitMethod`"
            },
            {
                "id": "6-D",
                "label": "D",
                "text": "`@Bean(initMethod=&quot;xxx&quot;)`"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Bean`的`initMethod`属性指定初始化方法；`@PostConstruct`是JSR注解，作用类似但属于Java规范。"
    },
    {
        "id": 7,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个接口用于监听Spring容器的事件？（ ）",
        "options": [
            {
                "id": "7-A",
                "label": "A",
                "text": "`ApplicationEvent`"
            },
            {
                "id": "7-B",
                "label": "B",
                "text": "`ApplicationListener`"
            },
            {
                "id": "7-C",
                "label": "C",
                "text": "`ApplicationEventPublisher`"
            },
            {
                "id": "7-D",
                "label": "D",
                "text": "`EventPublisher`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`ApplicationListener`用于监听事件，`ApplicationEventPublisher`用于发布事件，`ApplicationEvent`是事件基类。"
    },
    {
        "id": 8,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`@Profile`注解的作用是（ ）",
        "options": [
            {
                "id": "8-A",
                "label": "A",
                "text": "指定Bean的作用域"
            },
            {
                "id": "8-B",
                "label": "B",
                "text": "根据环境激活不同的Bean"
            },
            {
                "id": "8-C",
                "label": "C",
                "text": "标记Bean为主要Bean"
            },
            {
                "id": "8-D",
                "label": "D",
                "text": "延迟Bean的初始化"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@Profile`用于区分环境（如dev、test、prod），仅激活匹配的Bean。"
    },
    {
        "id": 9,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个不是Spring的AOP通知类型？（ ）",
        "options": [
            {
                "id": "9-A",
                "label": "A",
                "text": "前置通知（Before）"
            },
            {
                "id": "9-B",
                "label": "B",
                "text": "后置通知（After）"
            },
            {
                "id": "9-C",
                "label": "C",
                "text": "异常通知（Throws）"
            },
            {
                "id": "9-D",
                "label": "D",
                "text": "循环通知（Loop）"
            }
        ],
        "correctAnswer": "D",
        "explanation": "AOP通知类型包括前置、后置、返回、异常、环绕通知，无循环通知。"
    },
    {
        "id": 10,
        "category": "Spring",
        "type": "single",
        "text": "Spring中，`@Primary`注解的作用是（ ）",
        "options": [
            {
                "id": "10-A",
                "label": "A",
                "text": "标记Bean为必须存在"
            },
            {
                "id": "10-B",
                "label": "B",
                "text": "解决同类型Bean注入的歧义，指定首选Bean"
            },
            {
                "id": "10-C",
                "label": "C",
                "text": "延迟Bean的初始化"
            },
            {
                "id": "10-D",
                "label": "D",
                "text": "定义Bean的名称"
            }
        ],
        "correctAnswer": "B",
        "explanation": "当存在多个同类型Bean时，`@Primary`指定的Bean会被优先注入。"
    },
    {
        "id": 11,
        "category": "Spring",
        "type": "single",
        "text": "`ClassPathXmlApplicationContext`的作用是（ ）",
        "options": [
            {
                "id": "11-A",
                "label": "A",
                "text": "从文件系统加载XML配置"
            },
            {
                "id": "11-B",
                "label": "B",
                "text": "从类路径加载XML配置"
            },
            {
                "id": "11-C",
                "label": "C",
                "text": "从网络加载XML配置"
            },
            {
                "id": "11-D",
                "label": "D",
                "text": "加载注解配置"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`ClassPathXmlApplicationContext`用于加载类路径下的XML配置文件，`FileSystemXmlApplicationContext`加载文件系统路径。"
    },
    {
        "id": 12,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个注解用于将类标识为Spring的组件？（ ）",
        "options": [
            {
                "id": "12-A",
                "label": "A",
                "text": "`@Component`"
            },
            {
                "id": "12-B",
                "label": "B",
                "text": "`@Bean`"
            },
            {
                "id": "12-C",
                "label": "C",
                "text": "`@Configuration`"
            },
            {
                "id": "12-D",
                "label": "D",
                "text": "`@Service`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Component`是通用组件注解，`@Service`、`@Controller`、`@Repository`是其特殊化（分别用于服务、控制器、持久层）。"
    },
    {
        "id": 13,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`FactoryBean`与普通Bean的区别是（ ）",
        "options": [
            {
                "id": "13-A",
                "label": "A",
                "text": "`FactoryBean`是工厂，用于创建其他Bean"
            },
            {
                "id": "13-B",
                "label": "B",
                "text": "`FactoryBean`只能通过XML配置"
            },
            {
                "id": "13-C",
                "label": "C",
                "text": "普通Bean不能依赖`FactoryBean`"
            },
            {
                "id": "13-D",
                "label": "D",
                "text": "`FactoryBean`的生命周期与普通Bean不同"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`FactoryBean`是特殊Bean，用于创建复杂Bean（如`SqlSessionFactoryBean`），通过`getObject()`方法返回实际Bean。"
    },
    {
        "id": 14,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`Resource`接口不支持访问哪种资源？（ ）",
        "options": [
            {
                "id": "14-A",
                "label": "A",
                "text": "类路径资源（classpath:）"
            },
            {
                "id": "14-B",
                "label": "B",
                "text": "文件系统资源（file:）"
            },
            {
                "id": "14-C",
                "label": "C",
                "text": "网络资源（http:）"
            },
            {
                "id": "14-D",
                "label": "D",
                "text": "数据库资源（jdbc:）"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`Resource`支持类路径、文件、网络等资源，数据库资源通过数据源访问，不属此类。"
    },
    {
        "id": 15,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个不是Spring的Bean作用域？（ ）",
        "options": [
            {
                "id": "15-A",
                "label": "A",
                "text": "globalSession"
            },
            {
                "id": "15-B",
                "label": "B",
                "text": "application"
            },
            {
                "id": "15-C",
                "label": "C",
                "text": "thread"
            },
            {
                "id": "15-D",
                "label": "D",
                "text": "request"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>Spring的标准作用域包括singleton、prototype、request、session、globalSession、application，无thread。"
    },
    {
        "id": 16,
        "category": "Spring",
        "type": "single",
        "text": "`@Qualifier`注解通常与哪个注解配合使用？（ ）",
        "options": [
            {
                "id": "16-A",
                "label": "A",
                "text": "`@Bean`"
            },
            {
                "id": "16-B",
                "label": "B",
                "text": "`@Autowired`"
            },
            {
                "id": "16-C",
                "label": "C",
                "text": "`@Component`"
            },
            {
                "id": "16-D",
                "label": "D",
                "text": "`@Scope`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@Autowired`按类型注入，若存在多个同类型Bean，`@Qualifier`指定Bean名称解决歧义。"
    },
    {
        "id": 17,
        "category": "Spring",
        "type": "single",
        "text": "关于`BeanFactory`和`ApplicationContext`的关系，正确的是（ ）",
        "options": [
            {
                "id": "17-A",
                "label": "A",
                "text": "`ApplicationContext`是`BeanFactory`的子接口"
            },
            {
                "id": "17-B",
                "label": "B",
                "text": "`BeanFactory`是`ApplicationContext`的子接口"
            },
            {
                "id": "17-C",
                "label": "C",
                "text": "两者无继承关系"
            },
            {
                "id": "17-D",
                "label": "D",
                "text": "两者是同一接口的不同实现"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`ApplicationContext`继承`BeanFactory`，扩展了企业级功能（如事件、国际化）。"
    },
    {
        "id": 18,
        "category": "Spring",
        "type": "single",
        "text": "Spring中，`@PostConstruct`注解标注的方法执行时机是（ ）",
        "options": [
            {
                "id": "18-A",
                "label": "A",
                "text": "Bean实例化后，属性填充前"
            },
            {
                "id": "18-B",
                "label": "B",
                "text": "Bean属性填充后，初始化方法前"
            },
            {
                "id": "18-C",
                "label": "C",
                "text": "Bean初始化方法后"
            },
            {
                "id": "18-D",
                "label": "D",
                "text": "Bean销毁前"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@PostConstruct`在Bean属性填充完成后、初始化方法（如`afterPropertiesSet`）执行前调用。"
    },
    {
        "id": 19,
        "category": "Spring",
        "type": "single",
        "text": "`@Configuration`注解标注的类中，`@Bean`方法的特点是（ ）",
        "options": [
            {
                "id": "19-A",
                "label": "A",
                "text": "每次调用都会创建新的Bean实例"
            },
            {
                "id": "19-B",
                "label": "B",
                "text": "会被Spring代理，确保单例性"
            },
            {
                "id": "19-C",
                "label": "C",
                "text": "只能返回自定义类的实例"
            },
            {
                "id": "19-D",
                "label": "D",
                "text": "必须指定Bean的名称"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@Configuration`类中的`@Bean`方法会被代理，多次调用返回同一实例（单例），无需手动控制。"
    },
    {
        "id": 20,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个接口用于获取Bean在容器中的名称？（ ）",
        "options": [
            {
                "id": "20-A",
                "label": "A",
                "text": "`BeanNameAware`"
            },
            {
                "id": "20-B",
                "label": "B",
                "text": "`BeanFactoryAware`"
            },
            {
                "id": "20-C",
                "label": "C",
                "text": "`ApplicationContextAware`"
            },
            {
                "id": "20-D",
                "label": "D",
                "text": "`InitializingBean`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`BeanNameAware`的`setBeanName`方法可获取Bean的名称；`BeanFactoryAware`获取BeanFactory。"
    },
    {
        "id": 21,
        "category": "Spring",
        "type": "single",
        "text": "Spring的事务传播行为中，`REQUIRES_NEW`表示（ ）",
        "options": [
            {
                "id": "21-A",
                "label": "A",
                "text": "如果当前存在事务，加入该事务；否则创建新事务"
            },
            {
                "id": "21-B",
                "label": "B",
                "text": "无论当前是否存在事务，都创建新事务"
            },
            {
                "id": "21-C",
                "label": "C",
                "text": "如果当前存在事务，挂起该事务，创建新事务"
            },
            {
                "id": "21-D",
                "label": "D",
                "text": "依赖当前事务，若不存在则抛出异常"
            }
        ],
        "correctAnswer": "C",
        "explanation": "`REQUIRES_NEW`会创建新事务，若当前有事务则挂起；`REQUIRED`是加入现有事务。"
    },
    {
        "id": 22,
        "category": "Spring",
        "type": "single",
        "text": "关于Spring的`@Value`注解，以下说法错误的是（ ）",
        "options": [
            {
                "id": "22-A",
                "label": "A",
                "text": "可用于注入配置文件中的属性值"
            },
            {
                "id": "22-B",
                "label": "B",
                "text": "可注入SpEL表达式计算结果"
            },
            {
                "id": "22-C",
                "label": "C",
                "text": "只能用于字段注入，不能用于方法参数"
            },
            {
                "id": "22-D",
                "label": "D",
                "text": "可设置默认值（如`@Value( ${app.name:default} )`）"
            }
        ],
        "correctAnswer": "C",
        "explanation": "`@Value`可用于字段、方法参数、构造函数参数注入。"
    },
    {
        "id": 23,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个注解用于禁用Spring的自动装配？（ ）",
        "options": [
            {
                "id": "23-A",
                "label": "A",
                "text": "`@NoAutoWire`"
            },
            {
                "id": "23-B",
                "label": "B",
                "text": "`@DisableAutowire`"
            },
            {
                "id": "23-C",
                "label": "C",
                "text": "`@Autowired(required=false)`"
            },
            {
                "id": "23-D",
                "label": "D",
                "text": "`@Autowired`无法禁用，需通过XML配置"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Autowired(required=false)`表示注入非必需，若不存在则不注入，间接实现“可选”；无`@NoAutoWire`等注解。"
    },
    {
        "id": 24,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`@Service`注解的作用是（ ）",
        "options": [
            {
                "id": "24-A",
                "label": "A",
                "text": "标记类为控制器组件"
            },
            {
                "id": "24-B",
                "label": "B",
                "text": "标记类为服务层组件"
            },
            {
                "id": "24-C",
                "label": "C",
                "text": "标记类为配置类"
            },
            {
                "id": "24-D",
                "label": "D",
                "text": "标记类为持久层组件"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Service`用于服务层，`@Controller`用于控制器，`@Repository`用于持久层，均为`@Component`的特例。"
    },
    {
        "id": 25,
        "category": "Spring",
        "type": "single",
        "text": "Spring中，原型（prototype）作用域的Bean的生命周期特点是（ ）",
        "options": [
            {
                "id": "25-A",
                "label": "A",
                "text": "容器启动时创建，关闭时销毁"
            },
            {
                "id": "25-B",
                "label": "B",
                "text": "每次获取时创建，容器不管理销毁"
            },
            {
                "id": "25-C",
                "label": "C",
                "text": "每次请求时创建，请求结束时销毁"
            },
            {
                "id": "25-D",
                "label": "D",
                "text": "全局唯一，容器全程管理"
            }
        ],
        "correctAnswer": "B",
        "explanation": "原型Bean在`getBean`时创建，容器不负责销毁，需手动管理。"
    },
    {
        "id": 26,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`Bean`生命周期中，哪个阶段在属性填充之后、初始化方法之前执行？（ ）",
        "options": [
            {
                "id": "26-A",
                "label": "A",
                "text": "实例化（Instantiation）"
            },
            {
                "id": "26-B",
                "label": "B",
                "text": "销毁（Destruction）"
            },
            {
                "id": "26-C",
                "label": "C",
                "text": "`@PostConstruct`方法调用"
            },
            {
                "id": "26-D",
                "label": "D",
                "text": "初始化（Initialization）"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>Bean生命周期关键阶段：实例化→属性填充→`@PostConstruct`→初始化方法（如`afterPropertiesSet`）→使用→销毁。"
    },
    {
        "id": 27,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`@Transactional`注解默认的事务传播行为是（ ）",
        "options": [
            {
                "id": "27-A",
                "label": "A",
                "text": "`REQUIRED`"
            },
            {
                "id": "27-B",
                "label": "B",
                "text": "`REQUIRES_NEW`"
            },
            {
                "id": "27-C",
                "label": "C",
                "text": "`SUPPORTS`"
            },
            {
                "id": "27-D",
                "label": "D",
                "text": "`MANDATORY`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`REQUIRED`表示：如果当前存在事务，加入该事务；否则创建新事务，是默认传播行为。"
    },
    {
        "id": 28,
        "category": "Spring",
        "type": "single",
        "text": "关于Spring的`singleton`作用域Bean，以下说法错误的是（ ）",
        "options": [
            {
                "id": "28-A",
                "label": "A",
                "text": "容器中仅存在一个实例"
            },
            {
                "id": "28-B",
                "label": "B",
                "text": "线程不安全，需自行处理并发问题"
            },
            {
                "id": "28-C",
                "label": "C",
                "text": "初始化后一直存在，直到容器销毁"
            },
            {
                "id": "28-D",
                "label": "D",
                "text": "每次`getBean`都会创建新实例"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`singleton`是单例，首次加载后复用同一实例；`prototype`才会每次创建新实例。"
    },
    {
        "id": 29,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`@Qualifier`注解的`value`属性作用是（ ）",
        "options": [
            {
                "id": "29-A",
                "label": "A",
                "text": "指定Bean的类型"
            },
            {
                "id": "29-B",
                "label": "B",
                "text": "指定Bean的名称"
            },
            {
                "id": "29-C",
                "label": "C",
                "text": "指定Bean的作用域"
            },
            {
                "id": "29-D",
                "label": "D",
                "text": "指定Bean的优先级"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Qualifier(&quot;userService&quot;)`配合`@Autowired`，指定注入名称为`userService`的Bean。"
    },
    {
        "id": 30,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个不是Spring事务管理的方式？（ ）",
        "options": [
            {
                "id": "30-A",
                "label": "A",
                "text": "编程式事务（`TransactionTemplate`）"
            },
            {
                "id": "30-B",
                "label": "B",
                "text": "声明式事务（`@Transactional`）"
            },
            {
                "id": "30-C",
                "label": "C",
                "text": "XML配置事务"
            },
            {
                "id": "30-D",
                "label": "D",
                "text": "自动事务（无需任何配置）"
            }
        ],
        "correctAnswer": "D",
        "explanation": "Spring事务需显式配置（编程式或声明式），无“自动事务”模式。"
    },
    {
        "id": 31,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`BeanFactory`加载Bean的方式是（ ）",
        "options": [
            {
                "id": "31-A",
                "label": "A",
                "text": "预加载（启动时创建所有单例Bean）"
            },
            {
                "id": "31-B",
                "label": "B",
                "text": "延迟加载（首次`getBean`时创建）"
            },
            {
                "id": "31-C",
                "label": "C",
                "text": "按需加载（根据配置决定）"
            },
            {
                "id": "31-D",
                "label": "D",
                "text": "并行加载（多线程创建）"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`BeanFactory`是延迟加载，`ApplicationContext`是预加载单例Bean。"
    },
    {
        "id": 32,
        "category": "Spring",
        "type": "single",
        "text": "Spring AOP中，“织入”（Weaving）是指（ ）",
        "options": [
            {
                "id": "32-A",
                "label": "A",
                "text": "定义切面的过程"
            },
            {
                "id": "32-B",
                "label": "B",
                "text": "将切面代码插入到目标对象的过程"
            },
            {
                "id": "32-C",
                "label": "C",
                "text": "选择切入点的过程"
            },
            {
                "id": "32-D",
                "label": "D",
                "text": "执行通知的过程"
            }
        ],
        "correctAnswer": "B",
        "explanation": "织入是AOP的核心步骤，将切面逻辑与目标方法结合，Spring AOP采用运行时织入。"
    },
    {
        "id": 33,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个注解用于标记Bean为多例（原型）作用域？（ ）",
        "options": [
            {
                "id": "33-A",
                "label": "A",
                "text": "`@Scope(&quot;prototype&quot;)`"
            },
            {
                "id": "33-B",
                "label": "B",
                "text": "`@Prototype`"
            },
            {
                "id": "33-C",
                "label": "C",
                "text": "`@Scope(&quot;multiple&quot;)`"
            },
            {
                "id": "33-D",
                "label": "D",
                "text": "`@Multiple`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@Scope`注解指定作用域，`prototype`表示原型（多例），`singleton`表示单例（默认）。"
    },
    {
        "id": 34,
        "category": "Spring",
        "type": "single",
        "text": "关于Spring的`@Component`和`@Bean`的区别，以下说法错误的是（ ）",
        "options": [
            {
                "id": "34-A",
                "label": "A",
                "text": "`@Component`用于类，`@Bean`用于方法"
            },
            {
                "id": "34-B",
                "label": "B",
                "text": "`@Component`通过类路径扫描注册，`@Bean`通过配置类方法注册"
            },
            {
                "id": "34-C",
                "label": "C",
                "text": "`@Bean`可注册第三方类的Bean，`@Component`只能标注自定义类"
            },
            {
                "id": "34-D",
                "label": "D",
                "text": "两者功能完全相同，可互换使用"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`@Component`适用于自定义类，`@Bean`适用于第三方类（如`DataSource`），使用场景不同。"
    },
    {
        "id": 35,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`FactoryBean`接口的`getObjectType（B ）`方法的作用是（ ）",
        "options": [
            {
                "id": "35-A",
                "label": "A",
                "text": "返回工厂Bean自身的类型"
            },
            {
                "id": "35-B",
                "label": "B",
                "text": "返回工厂创建的目标Bean的类型"
            },
            {
                "id": "35-C",
                "label": "C",
                "text": "返回Bean的作用域"
            },
            {
                "id": "35-D",
                "label": "D",
                "text": "返回Bean的名称"
            }
        ],
        "correctAnswer": "",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`getObjectType()`返回`getObject()`方法创建的目标Bean的类型，便于Spring类型匹配。"
    },
    {
        "id": 36,
        "category": "Spring",
        "type": "single",
        "text": "以下哪个不是Spring的`Bean`作用域的应用场景？（ ）",
        "options": [
            {
                "id": "36-A",
                "label": "A",
                "text": "`singleton`：无状态的工具类（如`StringUtils`）"
            },
            {
                "id": "36-B",
                "label": "B",
                "text": "`prototype`：有状态的对象（如`User`实例）"
            },
            {
                "id": "36-C",
                "label": "C",
                "text": "`request`：存储请求级数据（如`ServletRequest`属性）"
            },
            {
                "id": "36-D",
                "label": "D",
                "text": "`session`：全局缓存（如系统配置）"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`session`作用域的Bean与用户会话绑定，不适合全局缓存；全局缓存用`singleton`。"
    },
    {
        "id": 37,
        "category": "Spring",
        "type": "single",
        "text": "Spring的`@Transactional`注解的`rollbackFor`属性作用是（ ）",
        "options": [
            {
                "id": "37-A",
                "label": "A",
                "text": "指定哪些异常触发事务回滚"
            },
            {
                "id": "37-B",
                "label": "B",
                "text": "指定哪些异常不触发事务回滚"
            },
            {
                "id": "37-C",
                "label": "C",
                "text": "指定事务的隔离级别"
            },
            {
                "id": "37-D",
                "label": "D",
                "text": "指定事务的传播行为"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`rollbackFor =\r\n              Exception.class`表示所有异常都回滚；默认仅对`RuntimeException`和`Error`回滚。"
    },
    {
        "id": 38,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring框架的核心是控制反转（IoC）和面向切面编程（AOP）。",
        "options": [
            {
                "id": "38-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "38-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 39,
        "category": "Spring",
        "type": "boolean",
        "text": "在Spring中，Bean的默认作用域是prototype。（ ）",
        "options": [
            {
                "id": "39-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "39-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "默认作用域是singleton"
    },
    {
        "id": 40,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring的IoC容器负责创建Bean实例，并管理Bean的生命周期。（ ）",
        "options": [
            {
                "id": "40-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "40-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 41,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring中的依赖注入（DI）只能通过构造函数注入实现。",
        "options": [
            {
                "id": "41-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "41-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": "还可通过setter方法注入、接口注入等"
    },
    {
        "id": 42,
        "category": "Spring",
        "type": "boolean",
        "text": "BeanFactory是Spring IoC容器的顶层接口，ApplicationContext是其实现类之一。（ ）",
        "options": [
            {
                "id": "42-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "42-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 43,
        "category": "Spring",
        "type": "boolean",
        "text": "在Spring中，使用@Autowired注解注入依赖时，默认按照名称匹配。（ ）",
        "options": [
            {
                "id": "43-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "43-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "默认按照类型匹配"
    },
    {
        "id": 44,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring支持基于XML和注解两种方式配置Bean。（ ）",
        "options": [
            {
                "id": "44-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "44-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 45,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring的事务管理只能通过编程式事务实现。（ ）",
        "options": [
            {
                "id": "45-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "45-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "还可通过声明式事务实现且声明式事务更常用"
    },
    {
        "id": 46,
        "category": "Spring",
        "type": "boolean",
        "text": "BeanFactory 作为 Spring IoC 容器的基础接口，其特点是启动时预加载所有单例 Bean。（ ）",
        "options": [
            {
                "id": "46-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "46-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "BeanFactory 是延迟加载仅在调用 `getBean` 时创建\r\n              Bean；ApplicationContext 才会预加载单例 Bean"
    },
    {
        "id": 47,
        "category": "Spring",
        "type": "boolean",
        "text": "ApplicationContext 继承自 BeanFactory，并扩展了国际化、资源访问等企业级功能。（ ）",
        "options": [
            {
                "id": "47-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "47-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 48,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring 中，`@PostConstruct` 注解标注的方法会在 Bean 属性填充完成后、初始化方法执行前被调用。（ ）",
        "options": [
            {
                "id": "48-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "48-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 49,
        "category": "Spring",
        "type": "boolean",
        "text": "Bean 的生命周期中，实例化（Instantiation）阶段先于属性填充（Populate）阶段执行。",
        "options": [
            {
                "id": "49-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "49-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 50,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring 的 AOP 中，通知（Advice）定义了切面的执行时机和具体逻辑，如前置通知、后置通知等。",
        "options": [
            {
                "id": "50-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "50-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 51,
        "category": "Spring",
        "type": "boolean",
        "text": "使用 `@Qualifier` 注解可以解决 `@Autowired` 注解因类型匹配多个 Bean 而产生的歧义问题。（ ）",
        "options": [
            {
                "id": "51-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "51-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 52,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring 中，原型（prototype）作用域的 Bean 会在容器启动时被创建，且每次获取都会返回同一个实例。",
        "options": [
            {
                "id": "52-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "52-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": "原型作用域的 Bean 不会在启动时创建每次调用 `getBean` 都会生成新实例"
    },
    {
        "id": 53,
        "category": "Spring",
        "type": "boolean",
        "text": "构造器注入相比 setter 注入，能更好地保证 Bean 的不可变性，且可避免循环依赖问题。（ ）",
        "options": [
            {
                "id": "53-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "53-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 54,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring 中，`@Scope(&quot;singleton&quot;)` 标注的 Bean 在整个容器中只会存在一个实例。（ ）",
        "options": [
            {
                "id": "54-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "54-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 55,
        "category": "Spring",
        "type": "boolean",
        "text": "AOP 中的切入点（PointCut）是指切面（Aspect）要织入的具体位置，通常通过表达式定义。",
        "options": [
            {
                "id": "55-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "55-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 56,
        "category": "Spring",
        "type": "boolean",
        "text": "面向切面编程中，织入（Weaving）是指将切面代码插入到目标对象方法中的过程，Spring AOP 只支持运行时织入。",
        "options": [
            {
                "id": "56-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "56-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 57,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring 的 `@Configuration` 注解标注的类，其内部被 `@Bean` 注解标注的方法会被代理，以确保 Bean 的单例性。（ ）",
        "options": [
            {
                "id": "57-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "57-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 58,
        "category": "Spring",
        "type": "boolean",
        "text": "`ClassPathXmlApplicationContext` 是 ApplicationContext 的实现类，用于从类路径加载 XML 配置文件。（ ）",
        "options": [
            {
                "id": "58-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "58-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 59,
        "category": "Spring",
        "type": "boolean",
        "text": "Spring 中，依赖注入的本质是容器在创建 Bean 时，自动将其依赖的其他 Bean 注入到其中。（ ）",
        "options": [
            {
                "id": "59-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "59-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 60,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC的核心前端控制器是（ ）",
        "options": [
            {
                "id": "60-A",
                "label": "A",
                "text": "`Controller`"
            },
            {
                "id": "60-B",
                "label": "B",
                "text": "`DispatcherServlet`"
            },
            {
                "id": "60-C",
                "label": "C",
                "text": "`HandlerMapping`"
            },
            {
                "id": "60-D",
                "label": "D",
                "text": "`ViewResolver`"
            }
        ],
        "correctAnswer": "F",
        "explanation": "`DispatcherServlet`是Spring\r\n              MVC的核心，负责接收请求、分发到Controller、处理响应。"
    },
    {
        "id": 61,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@RequestMapping`注解的`value`属性的作用是（ ）",
        "options": [
            {
                "id": "61-A",
                "label": "A",
                "text": "指定请求方法（GET/POST等）"
            },
            {
                "id": "61-B",
                "label": "B",
                "text": "指定请求路径"
            },
            {
                "id": "61-C",
                "label": "C",
                "text": "指定响应类型"
            },
            {
                "id": "61-D",
                "label": "D",
                "text": "指定参数名称"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`value`属性定义请求路径，可简写为`@RequestMapping(&quot;/path&quot;)`；`method`属性指定请求方法。"
    },
    {
        "id": 62,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个注解用于获取URL路径中的参数（如`/user/{id}`中的id）？（ ）",
        "options": [
            {
                "id": "62-A",
                "label": "A",
                "text": "`@RequestParam`"
            },
            {
                "id": "62-B",
                "label": "B",
                "text": "`@PathVariable`"
            },
            {
                "id": "62-C",
                "label": "C",
                "text": "`@RequestHeader`"
            },
            {
                "id": "62-D",
                "label": "D",
                "text": "`@CookieValue`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@PathVariable`获取路径参数；`@RequestParam`获取请求参数（如`?id=1`）。"
    },
    {
        "id": 63,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，`ModelAndView`的作用是（ ）",
        "options": [
            {
                "id": "63-A",
                "label": "A",
                "text": "仅封装视图名称"
            },
            {
                "id": "63-B",
                "label": "B",
                "text": "仅封装模型数据"
            },
            {
                "id": "63-C",
                "label": "C",
                "text": "封装视图名称和模型数据"
            },
            {
                "id": "63-D",
                "label": "D",
                "text": "处理请求参数"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`ModelAndView`包含`viewName`（视图名）和`model`（模型数据），用于Controller向视图传递数据。"
    },
    {
        "id": 64,
        "category": "SpringMVC",
        "type": "single",
        "text": "视图解析器（`ViewResolver`）的主要作用是（ ）",
        "options": [
            {
                "id": "64-A",
                "label": "A",
                "text": "将逻辑视图名解析为物理视图路径"
            },
            {
                "id": "64-B",
                "label": "B",
                "text": "处理请求参数"
            },
            {
                "id": "64-C",
                "label": "C",
                "text": "执行Controller方法"
            },
            {
                "id": "64-D",
                "label": "D",
                "text": "渲染视图"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>视图解析器根据逻辑视图名（如“index”）结合前缀（如“/WEB-INF/views/”）和后缀（如“.jsp”）生成物理路径。"
    },
    {
        "id": 65,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ResponseBody`注解的作用是（ ）",
        "options": [
            {
                "id": "65-A",
                "label": "A",
                "text": "将方法返回值作为模型数据"
            },
            {
                "id": "65-B",
                "label": "B",
                "text": "将方法返回值直接写入响应体（如JSON）"
            },
            {
                "id": "65-C",
                "label": "C",
                "text": "重定向到指定URL"
            },
            {
                "id": "65-D",
                "label": "D",
                "text": "转发到指定视图"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@ResponseBody`使返回值不经过视图解析，直接作为响应体（如返回JSON时常用）。"
    },
    {
        "id": 66,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC的拦截器（`Interceptor`）需要实现哪个接口？（ ）",
        "options": [
            {
                "id": "66-A",
                "label": "A",
                "text": "`Filter`"
            },
            {
                "id": "66-B",
                "label": "B",
                "text": "`HandlerInterceptor`"
            },
            {
                "id": "66-C",
                "label": "C",
                "text": "`Interceptor`"
            },
            {
                "id": "66-D",
                "label": "D",
                "text": "`WebMvcInterceptor`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>拦截器需实现`HandlerInterceptor`，重写`preHandle`、`postHandle`、`afterCompletion`方法。"
    },
    {
        "id": 67,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个方法在Controller方法执行后、视图渲染前调用？（ ）",
        "options": [
            {
                "id": "67-A",
                "label": "A",
                "text": "`preHandle`"
            },
            {
                "id": "67-B",
                "label": "B",
                "text": "`postHandle`"
            },
            {
                "id": "67-C",
                "label": "C",
                "text": "`afterCompletion`"
            },
            {
                "id": "67-D",
                "label": "D",
                "text": "`doFilter`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`preHandle`在Controller前执行，`postHandle`在Controller后、视图前执行，`afterCompletion`在视图后执行。"
    },
    {
        "id": 68,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@RestController`注解是以下哪两个注解的组合？（ ）",
        "options": [
            {
                "id": "68-A",
                "label": "A",
                "text": "`@Controller`和`@ResponseBody`"
            },
            {
                "id": "68-B",
                "label": "B",
                "text": "`@Controller`和`@ResponseStatus`"
            },
            {
                "id": "68-C",
                "label": "C",
                "text": "`@Service`和`@ResponseBody`"
            },
            {
                "id": "68-D",
                "label": "D",
                "text": "`@Component`和`@ResponseBody`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@RestController` = `@Controller` +\r\n              `@ResponseBody`，适用于RESTful接口，返回值直接作为响应体。"
    },
    {
        "id": 69,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，处理文件上传的接口是（ ）",
        "options": [
            {
                "id": "69-A",
                "label": "A",
                "text": "`File`"
            },
            {
                "id": "69-B",
                "label": "B",
                "text": "`MultipartFile`"
            },
            {
                "id": "69-C",
                "label": "C",
                "text": "`UploadedFile`"
            },
            {
                "id": "69-D",
                "label": "D",
                "text": "`HttpFile`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`MultipartFile`用于接收上传的文件，提供`getOriginalFilename()`、`transferTo()`等方法。"
    },
    {
        "id": 70,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ExceptionHandler`注解的作用是（ ）",
        "options": [
            {
                "id": "70-A",
                "label": "A",
                "text": "定义全局异常处理"
            },
            {
                "id": "70-B",
                "label": "B",
                "text": "定义当前Controller的异常处理"
            },
            {
                "id": "70-C",
                "label": "C",
                "text": "抛出异常"
            },
            {
                "id": "70-D",
                "label": "D",
                "text": "标记异常类"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@ExceptionHandler`在Controller内部定义异常处理方法，配合`@ControllerAdvice`可实现全局处理。"
    },
    {
        "id": 71,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个注解用于将请求参数绑定到模型对象？（ ）",
        "options": [
            {
                "id": "71-A",
                "label": "A",
                "text": "`@ModelAttribute`"
            },
            {
                "id": "71-B",
                "label": "B",
                "text": "`@RequestParam`"
            },
            {
                "id": "71-C",
                "label": "C",
                "text": "`@PathVariable`"
            },
            {
                "id": "71-D",
                "label": "D",
                "text": "`@Bind`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@ModelAttribute`将请求参数绑定到对象，并自动添加到模型中，如`public String\r\n              save(@ModelAttribute User user)`。"
    },
    {
        "id": 72,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，静态资源（如CSS、JS）的默认处理方式是（ ）",
        "options": [
            {
                "id": "72-A",
                "label": "A",
                "text": "被`DispatcherServlet`拦截，需手动配置排除"
            },
            {
                "id": "72-B",
                "label": "B",
                "text": "不被拦截，可直接访问"
            },
            {
                "id": "72-C",
                "label": "C",
                "text": "必须通过`@RequestMapping`映射"
            },
            {
                "id": "72-D",
                "label": "D",
                "text": "默认禁止访问"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>默认`DispatcherServlet`映射`/`，会拦截静态资源，需通过`mvc:resources`或`WebMvcConfigurer`配置排除。"
    },
    {
        "id": 73,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@RequestHeader`注解用于获取（ ）",
        "options": [
            {
                "id": "73-A",
                "label": "A",
                "text": "请求参数"
            },
            {
                "id": "73-B",
                "label": "B",
                "text": "URL路径参数"
            },
            {
                "id": "73-C",
                "label": "C",
                "text": "HTTP请求头信息"
            },
            {
                "id": "73-D",
                "label": "D",
                "text": "Cookie信息"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@RequestHeader`获取请求头（如`@RequestHeader(&quot;User-Agent&quot;) String\r\n              userAgent`）。"
    },
    {
        "id": 74,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@CookieValue`注解用于获取（ ）",
        "options": [
            {
                "id": "74-A",
                "label": "A",
                "text": "请求参数"
            },
            {
                "id": "74-B",
                "label": "B",
                "text": "请求头"
            },
            {
                "id": "74-C",
                "label": "C",
                "text": "Cookie的值"
            },
            {
                "id": "74-D",
                "label": "D",
                "text": "Session属性"
            }
        ],
        "correctAnswer": "C",
        "explanation": "`@CookieValue(&quot;JSESSIONID&quot;) String\r\n              sessionId`用于获取指定Cookie的值。"
    },
    {
        "id": 75,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个不是Spring MVC的视图类型？（ ）",
        "options": [
            {
                "id": "75-A",
                "label": "A",
                "text": "JSP视图（`InternalResourceView`）"
            },
            {
                "id": "75-B",
                "label": "B",
                "text": "JSON视图（`MappingJackson2JsonView`）"
            },
            {
                "id": "75-C",
                "label": "C",
                "text": "Redirect视图（`RedirectView`）"
            },
            {
                "id": "75-D",
                "label": "D",
                "text": "数据库视图"
            }
        ],
        "correctAnswer": "D",
        "explanation": "数据库视图是数据库层面的概念，非Spring MVC视图。"
    },
    {
        "id": 76,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@SessionAttributes`注解的作用是（ ）",
        "options": [
            {
                "id": "76-A",
                "label": "A",
                "text": "将模型属性存储到Session中"
            },
            {
                "id": "76-B",
                "label": "B",
                "text": "获取Session中的属性"
            },
            {
                "id": "76-C",
                "label": "C",
                "text": "清除Session中的属性"
            },
            {
                "id": "76-D",
                "label": "D",
                "text": "禁用Session"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@SessionAttributes(&quot;user&quot;)`将模型中名为“user”的属性存入Session，实现跨请求共享。"
    },
    {
        "id": 77,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，Controller方法的返回值类型不包括（ ）",
        "options": [
            {
                "id": "77-A",
                "label": "A",
                "text": "`String`（视图名）"
            },
            {
                "id": "77-B",
                "label": "B",
                "text": "`void`（响应体或默认视图）"
            },
            {
                "id": "77-C",
                "label": "C",
                "text": "`ModelAndView`"
            },
            {
                "id": "77-D",
                "label": "D",
                "text": "`HttpServletRequest`"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`HttpServletRequest`是方法参数类型，用于接收请求对象，不能作为返回值。"
    },
    {
        "id": 78,
        "category": "SpringMVC",
        "type": "single",
        "text": "视图解析器的`order`属性的作用是（ ）",
        "options": [
            {
                "id": "78-A",
                "label": "A",
                "text": "指定视图的优先级"
            },
            {
                "id": "78-B",
                "label": "B",
                "text": "指定解析器的执行顺序（值越小越先执行）"
            },
            {
                "id": "78-C",
                "label": "C",
                "text": "指定视图的缓存时间"
            },
            {
                "id": "78-D",
                "label": "D",
                "text": "指定视图的类型"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`order`值越小，视图解析器优先级越高，先尝试解析视图。"
    },
    {
        "id": 79,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ResponseStatus`注解的作用是（ ）",
        "options": [
            {
                "id": "79-A",
                "label": "A",
                "text": "指定响应的视图名"
            },
            {
                "id": "79-B",
                "label": "B",
                "text": "指定响应的HTTP状态码"
            },
            {
                "id": "79-C",
                "label": "C",
                "text": "指定响应的Content-Type"
            },
            {
                "id": "79-D",
                "label": "D",
                "text": "重定向到指定URL"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@ResponseStatus(code = 404)`可指定方法返回的HTTP状态码。"
    },
    {
        "id": 80,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC的`MultipartResolver`的作用是（ ）",
        "options": [
            {
                "id": "80-A",
                "label": "A",
                "text": "处理多部分请求（文件上传）"
            },
            {
                "id": "80-B",
                "label": "B",
                "text": "解析请求参数"
            },
            {
                "id": "80-C",
                "label": "C",
                "text": "处理多视图解析"
            },
            {
                "id": "80-D",
                "label": "D",
                "text": "实现请求转发"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`MultipartResolver`用于解析文件上传请求，Spring\r\n              Boot中自动配置`StandardServletMultipartResolver`。"
    },
    {
        "id": 81,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ControllerAdvice`注解的作用是（ ）",
        "options": [
            {
                "id": "81-A",
                "label": "A",
                "text": "标记类为控制器"
            },
            {
                "id": "81-B",
                "label": "B",
                "text": "集中处理多个Controller的共性问题（如全局异常）"
            },
            {
                "id": "81-C",
                "label": "C",
                "text": "定义Controller的拦截规则"
            },
            {
                "id": "81-D",
                "label": "D",
                "text": "指定Controller的请求路径前缀"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@ControllerAdvice`是全局控制器增强，可配合`@ExceptionHandler`、`@ModelAttribute`等实现全局处理。"
    },
    {
        "id": 82,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个方法在请求处理完成（包括视图渲染）后调用，无论是否发生异常？（ ）",
        "options": [
            {
                "id": "82-A",
                "label": "A",
                "text": "`preHandle`"
            },
            {
                "id": "82-B",
                "label": "B",
                "text": "`postHandle`"
            },
            {
                "id": "82-C",
                "label": "C",
                "text": "`afterCompletion`"
            },
            {
                "id": "82-D",
                "label": "D",
                "text": "`destroy`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`afterCompletion`在整个请求处理完成后调用，适合资源清理；若`preHandle`返回`false`，则不调用。"
    },
    {
        "id": 83,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，`redirect:`前缀的作用是（ ）",
        "options": [
            {
                "id": "83-A",
                "label": "A",
                "text": "转发到指定视图"
            },
            {
                "id": "83-B",
                "label": "B",
                "text": "重定向到指定URL"
            },
            {
                "id": "83-C",
                "label": "C",
                "text": "返回JSON数据"
            },
            {
                "id": "83-D",
                "label": "D",
                "text": "跳转到错误页面"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`return\r\n              &quot;redirect:/index&quot;`表示重定向到`/index`；`forward:`前缀表示转发。"
    },
    {
        "id": 84,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@RequestParam`的`required`属性默认值是（ ）",
        "options": [
            {
                "id": "84-A",
                "label": "A",
                "text": "`true`"
            },
            {
                "id": "84-B",
                "label": "B",
                "text": "`false`"
            },
            {
                "id": "84-C",
                "label": "C",
                "text": "`null`"
            },
            {
                "id": "84-D",
                "label": "D",
                "text": "取决于参数类型"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@RequestParam`默认要求参数必须存在，否则抛出异常；可设置`required=false`允许参数缺失。"
    },
    {
        "id": 85,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC的`HandlerMapping`的作用是（ ）",
        "options": [
            {
                "id": "85-A",
                "label": "A",
                "text": "将请求映射到对应的Controller方法"
            },
            {
                "id": "85-B",
                "label": "B",
                "text": "解析视图名"
            },
            {
                "id": "85-C",
                "label": "C",
                "text": "处理文件上传"
            },
            {
                "id": "85-D",
                "label": "D",
                "text": "拦截请求"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`HandlerMapping`负责根据请求路径查找对应的处理器（Controller方法），如`RequestMappingHandlerMapping`。"
    },
    {
        "id": 86,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个不是`HandlerInterceptor`接口的方法？（ ）",
        "options": [
            {
                "id": "86-A",
                "label": "A",
                "text": "`preHandle`"
            },
            {
                "id": "86-B",
                "label": "B",
                "text": "`postHandle`"
            },
            {
                "id": "86-C",
                "label": "C",
                "text": "`afterHandle`"
            },
            {
                "id": "86-D",
                "label": "D",
                "text": "`afterCompletion`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>接口方法为`preHandle`、`postHandle`、`afterCompletion`，无`afterHandle`。"
    },
    {
        "id": 87,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ModelAttribute`注解标注在方法上时，其作用是（ ）",
        "options": [
            {
                "id": "87-A",
                "label": "A",
                "text": "该方法在当前Controller的所有请求方法前执行，结果存入模型"
            },
            {
                "id": "87-B",
                "label": "B",
                "text": "绑定请求参数到模型对象"
            },
            {
                "id": "87-C",
                "label": "C",
                "text": "指定模型对象的名称"
            },
            {
                "id": "87-D",
                "label": "D",
                "text": "定义全局模型数据"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@ModelAttribute`方法在Controller的每个请求方法执行前调用，常用于初始化公共模型数据。"
    },
    {
        "id": 88,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，处理JSON数据通常依赖哪个库？（ ）",
        "options": [
            {
                "id": "88-A",
                "label": "A",
                "text": "Jackson"
            },
            {
                "id": "88-B",
                "label": "B",
                "text": "Gson"
            },
            {
                "id": "88-C",
                "label": "C",
                "text": "FastJSON"
            },
            {
                "id": "88-D",
                "label": "D",
                "text": "以上均可"
            }
        ],
        "correctAnswer": "D",
        "explanation": "Spring\r\n              MVC支持Jackson（默认）、Gson、FastJSON等，通过对应的消息转换器实现JSON序列化。"
    },
    {
        "id": 89,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@RequestMapping`的`consumes`属性用于（ ）",
        "options": [
            {
                "id": "89-A",
                "label": "A",
                "text": "指定请求的Content-Type"
            },
            {
                "id": "89-B",
                "label": "B",
                "text": "指定响应的Content-Type"
            },
            {
                "id": "89-C",
                "label": "C",
                "text": "指定请求参数"
            },
            {
                "id": "89-D",
                "label": "D",
                "text": "指定请求方法"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`consumes =\r\n              &quot;application/json&quot;`表示仅处理Content-Type为JSON的请求；`produces`指定响应类型。"
    },
    {
        "id": 90,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC的`View`接口的`render`方法的作用是（ ）",
        "options": [
            {
                "id": "90-A",
                "label": "A",
                "text": "解析视图名"
            },
            {
                "id": "90-B",
                "label": "B",
                "text": "将模型数据渲染到响应中"
            },
            {
                "id": "90-C",
                "label": "C",
                "text": "处理请求参数"
            },
            {
                "id": "90-D",
                "label": "D",
                "text": "调用Controller方法"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`View.render(model, request, response)`负责将模型数据渲染到页面或响应体。"
    },
    {
        "id": 91,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个注解用于指定Controller方法返回的JSON数据的日期格式？（ ）",
        "options": [
            {
                "id": "91-A",
                "label": "A",
                "text": "`@JsonFormat`"
            },
            {
                "id": "91-B",
                "label": "B",
                "text": "`@DateFormat`"
            },
            {
                "id": "91-C",
                "label": "C",
                "text": "`@DateTimeFormat`"
            },
            {
                "id": "91-D",
                "label": "D",
                "text": "`@JsonDate`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@JsonFormat(pattern =\r\n              &quot;yyyy-MM-dd&quot;)`是Jackson注解，用于指定JSON日期格式。"
    },
    {
        "id": 92,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@PathVariable`的`value`属性的作用是（ ）",
        "options": [
            {
                "id": "92-A",
                "label": "A",
                "text": "指定参数是否必需"
            },
            {
                "id": "92-B",
                "label": "B",
                "text": "指定路径参数的名称（与URL中的占位符对应）"
            },
            {
                "id": "92-C",
                "label": "C",
                "text": "指定参数的默认值"
            },
            {
                "id": "92-D",
                "label": "D",
                "text": "指定参数的类型"
            }
        ],
        "correctAnswer": "B",
        "explanation": "如`@PathVariable(value =\r\n              &quot;id&quot;)`绑定URL中`{id}`的参数；若参数名与占位符一致，可省略。"
    },
    {
        "id": 93,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，默认的视图解析器是（ ）",
        "options": [
            {
                "id": "93-A",
                "label": "A",
                "text": "`InternalResourceViewResolver`（JSP视图解析器）"
            },
            {
                "id": "93-B",
                "label": "B",
                "text": "`FreeMarkerViewResolver`"
            },
            {
                "id": "93-C",
                "label": "C",
                "text": "`VelocityViewResolver`"
            },
            {
                "id": "93-D",
                "label": "D",
                "text": "`ThymeleafViewResolver`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "默认使用`InternalResourceViewResolver`解析JSP视图，其他视图解析器需手动配置。"
    },
    {
        "id": 94,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@RequestParam`的`defaultValue`属性的作用是（ ）",
        "options": [
            {
                "id": "94-A",
                "label": "A",
                "text": "指定参数的默认名称"
            },
            {
                "id": "94-B",
                "label": "B",
                "text": "当参数未传递时使用的默认值"
            },
            {
                "id": "94-C",
                "label": "C",
                "text": "指定参数的默认类型"
            },
            {
                "id": "94-D",
                "label": "D",
                "text": "标记参数为可选"
            }
        ],
        "correctAnswer": "B",
        "explanation": "如`@RequestParam(defaultValue = &quot;1&quot;) int\r\n              page`，当无page参数时，默认值为1。"
    },
    {
        "id": 95,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪种方式不能实现Spring MVC的全局异常处理？（ ）",
        "options": [
            {
                "id": "95-A",
                "label": "A",
                "text": "`@ControllerAdvice` + `@ExceptionHandler`"
            },
            {
                "id": "95-B",
                "label": "B",
                "text": "实现`HandlerExceptionResolver`接口"
            },
            {
                "id": "95-C",
                "label": "C",
                "text": "在每个Controller中定义`@ExceptionHandler`"
            },
            {
                "id": "95-D",
                "label": "D",
                "text": "配置`SimpleMappingExceptionResolver`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "C是局部异常处理，仅作用于当前Controller；其他选项可实现全局处理。"
    },
    {
        "id": 96,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，`Model`和`ModelMap`的关系是（ ）",
        "options": [
            {
                "id": "96-A",
                "label": "A",
                "text": "`Model`是接口，`ModelMap`是其实现类"
            },
            {
                "id": "96-B",
                "label": "B",
                "text": "`ModelMap`是接口，`Model`是其实现类"
            },
            {
                "id": "96-C",
                "label": "C",
                "text": "两者无关系"
            },
            {
                "id": "96-D",
                "label": "D",
                "text": "两者是同一类的不同名称"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`Model`是接口，`ModelMap`是实现类，功能类似，用于存储模型数据。"
    },
    {
        "id": 97,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，`DispatcherServlet`的核心职责不包括（ ）",
        "options": [
            {
                "id": "97-A",
                "label": "A",
                "text": "接收HTTP请求"
            },
            {
                "id": "97-B",
                "label": "B",
                "text": "调用业务逻辑层方法"
            },
            {
                "id": "97-C",
                "label": "C",
                "text": "分发请求到Controller"
            },
            {
                "id": "97-D",
                "label": "D",
                "text": "处理响应并返回给客户端"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`DispatcherServlet`负责请求分发、视图解析等调度工作，业务逻辑由Controller调用Service层完成，并非其核心职责。"
    },
    {
        "id": 98,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@RequestMapping`的`params`属性作用是（ ）",
        "options": [
            {
                "id": "98-A",
                "label": "A",
                "text": "指定请求必须包含的参数（如`params = &quot;id&quot;`）"
            },
            {
                "id": "98-B",
                "label": "B",
                "text": "指定请求参数的类型"
            },
            {
                "id": "98-C",
                "label": "C",
                "text": "绑定请求参数到方法参数"
            },
            {
                "id": "98-D",
                "label": "D",
                "text": "过滤请求参数的字符集"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`params`用于限制请求必须包含指定参数，如`@RequestMapping(value =\r\n              &quot;/user&quot;, params = &quot;action=delete&quot;)`仅匹配含`action=delete`参数的请求。"
    },
    {
        "id": 99,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪种方式不能将请求参数绑定到Controller方法的JavaBean参数？（ ）",
        "options": [
            {
                "id": "99-A",
                "label": "A",
                "text": "表单字段名与JavaBean属性名一致"
            },
            {
                "id": "99-B",
                "label": "B",
                "text": "使用`@ModelAttribute`注解"
            },
            {
                "id": "99-C",
                "label": "C",
                "text": "使用`@RequestParam`注解逐个绑定"
            },
            {
                "id": "99-D",
                "label": "D",
                "text": "使用`@PathVariable`注解"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@PathVariable`用于绑定URL路径参数，而非请求参数（如`?name=xxx`），无法直接绑定JavaBean。"
    },
    {
        "id": 100,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC的`ViewResolver`接口的`resolveViewName`方法返回（ ）",
        "options": [
            {
                "id": "100-A",
                "label": "A",
                "text": "视图名（String）"
            },
            {
                "id": "100-B",
                "label": "B",
                "text": "`View`对象"
            },
            {
                "id": "100-C",
                "label": "C",
                "text": "模型数据（Model）"
            },
            {
                "id": "100-D",
                "label": "D",
                "text": "响应体（Response）"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`resolveViewName`根据逻辑视图名解析并返回`View`对象，由`View`负责渲染数据。"
    },
    {
        "id": 101,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ResponseBody`注解依赖的消息转换器接口是（ ）",
        "options": [
            {
                "id": "101-A",
                "label": "A",
                "text": "`HttpMessageConverter`"
            },
            {
                "id": "101-B",
                "label": "B",
                "text": "`ViewResolver`"
            },
            {
                "id": "101-C",
                "label": "C",
                "text": "`HandlerAdapter`"
            },
            {
                "id": "101-D",
                "label": "D",
                "text": "`MessageSource`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@ResponseBody`通过`HttpMessageConverter`（如`MappingJackson2HttpMessageConverter`）将返回值转换为JSON等格式，写入响应体。"
    },
    {
        "id": 102,
        "category": "SpringMVC",
        "type": "single",
        "text": "拦截器的`preHandle`方法返回`false`时，后续流程会（ ）",
        "options": [
            {
                "id": "102-A",
                "label": "A",
                "text": "继续执行Controller方法，但不执行`postHandle`"
            },
            {
                "id": "102-B",
                "label": "B",
                "text": "终止请求处理，不执行Controller和后续拦截器方法"
            },
            {
                "id": "102-C",
                "label": "C",
                "text": "仅跳过当前拦截器，继续执行其他拦截器"
            },
            {
                "id": "102-D",
                "label": "D",
                "text": "执行完所有拦截器后终止"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`preHandle`返回`false`会中断请求链，Controller方法、后续拦截器的`preHandle`、`postHandle`等均不执行。"
    },
    {
        "id": 103,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ModelAttribute`注解标注在方法参数上时，若未指定名称，默认的模型属性名称是（ ）",
        "options": [
            {
                "id": "103-A",
                "label": "A",
                "text": "参数类型的首字母小写（如`User`→`user`）"
            },
            {
                "id": "103-B",
                "label": "B",
                "text": "参数的变量名"
            },
            {
                "id": "103-C",
                "label": "C",
                "text": "类名全称"
            },
            {
                "id": "103-D",
                "label": "D",
                "text": "无默认名称，必须显式指定"
            }
        ],
        "correctAnswer": "A",
        "explanation": "如`public String save(@ModelAttribute User\r\n              user)`，模型中属性名为`user`（`User`类首字母小写）；可通过`@ModelAttribute(&quot;myUser&quot;)`指定名称。"
    },
    {
        "id": 104,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个不是`HandlerInterceptor`接口的方法执行时机？（ ）",
        "options": [
            {
                "id": "104-A",
                "label": "A",
                "text": "Controller方法执行前（`preHandle`）"
            },
            {
                "id": "104-B",
                "label": "B",
                "text": "Controller方法执行后、视图渲染前（`postHandle`）"
            },
            {
                "id": "104-C",
                "label": "C",
                "text": "视图渲染后（`afterCompletion`）"
            },
            {
                "id": "104-D",
                "label": "D",
                "text": "请求到达`DispatcherServlet`前（`beforeDispatch`）"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`HandlerInterceptor`无`beforeDispatch`方法，`preHandle`在`DispatcherServlet`分发请求到Controller前执行。"
    },
    {
        "id": 105,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，`MultipartFile`的`transferTo(File dest)`方法的作用是（ ）",
        "options": [
            {
                "id": "105-A",
                "label": "A",
                "text": "获取上传文件的输入流"
            },
            {
                "id": "105-B",
                "label": "B",
                "text": "将上传文件保存到目标路径"
            },
            {
                "id": "105-C",
                "label": "C",
                "text": "获取上传文件的大小"
            },
            {
                "id": "105-D",
                "label": "D",
                "text": "获取上传文件的原始文件名"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`transferTo`是便捷方法，用于将上传的临时文件保存到指定目标文件；需注意目标路径的权限。"
    },
    {
        "id": 106,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC的`@RequestMapping`支持Ant风格路径，以下哪个符号表示匹配任意多级目录？（ ）",
        "options": [
            {
                "id": "106-A",
                "label": "A",
                "text": "`*`"
            },
            {
                "id": "106-B",
                "label": "B",
                "text": "`**`"
            },
            {
                "id": "106-C",
                "label": "C",
                "text": "`?`"
            },
            {
                "id": "106-D",
                "label": "D",
                "text": "`#`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "Ant风格中，`*`匹配任意字符（单级），`**`匹配任意多级目录，`?`匹配单个字符。"
    },
    {
        "id": 107,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪种情况`@RequestParam`会抛出`MissingServletRequestParameterException`？（ ）",
        "options": [
            {
                "id": "107-A",
                "label": "A",
                "text": "参数值为`null`"
            },
            {
                "id": "107-B",
                "label": "B",
                "text": "参数未传递且`required = true`（默认）"
            },
            {
                "id": "107-C",
                "label": "C",
                "text": "参数类型不匹配"
            },
            {
                "id": "107-D",
                "label": "D",
                "text": "参数值为空字符串"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@RequestParam`默认`required =\r\n              true`，若参数未传递则抛该异常；可设置`required = false`避免。"
    },
    {
        "id": 108,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ResponseStatus`注解标注在异常类上时，作用是（ ）",
        "options": [
            {
                "id": "108-A",
                "label": "A",
                "text": "当该异常被抛出时，返回指定的HTTP状态码"
            },
            {
                "id": "108-B",
                "label": "B",
                "text": "标记异常为可处理异常"
            },
            {
                "id": "108-C",
                "label": "C",
                "text": "定义异常的错误消息"
            },
            {
                "id": "108-D",
                "label": "D",
                "text": "将异常信息写入响应体"
            }
        ],
        "correctAnswer": "A",
        "explanation": "如`@ResponseStatus(code =\r\n              HttpStatus.NOT_FOUND)`标注在`ResourceNotFoundException`上，抛出该异常时返回404状态码。"
    },
    {
        "id": 109,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，`Model`接口的`addAttribute`方法的作用是（ ）",
        "options": [
            {
                "id": "109-A",
                "label": "A",
                "text": "向模型添加属性（键值对）"
            },
            {
                "id": "109-B",
                "label": "B",
                "text": "从模型中移除属性"
            },
            {
                "id": "109-C",
                "label": "C",
                "text": "替换模型中的属性"
            },
            {
                "id": "109-D",
                "label": "D",
                "text": "清空模型中的所有属性"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`addAttribute(&quot;user&quot;,\r\n              user)`向模型添加名为`user`的属性，供视图访问；`removeAttribute`用于移除。"
    },
    {
        "id": 110,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个注解用于获取请求体中的JSON数据并绑定到方法参数？（ ）",
        "options": [
            {
                "id": "110-A",
                "label": "A",
                "text": "`@RequestParam`"
            },
            {
                "id": "110-B",
                "label": "B",
                "text": "`@RequestBody`"
            },
            {
                "id": "110-C",
                "label": "C",
                "text": "`@ModelAttribute`"
            },
            {
                "id": "110-D",
                "label": "D",
                "text": "`@JsonBody`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@RequestBody`用于接收请求体中的数据（如JSON），通过消息转换器转换为Java对象，适用于POST/PUT等请求。"
    },
    {
        "id": 111,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@SessionAttributes`注解标注的属性会存储在（ ）",
        "options": [
            {
                "id": "111-A",
                "label": "A",
                "text": "`HttpServletRequest`"
            },
            {
                "id": "111-B",
                "label": "B",
                "text": "`HttpSession`"
            },
            {
                "id": "111-C",
                "label": "C",
                "text": "`Model`"
            },
            {
                "id": "111-D",
                "label": "D",
                "text": "`ServletContext`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@SessionAttributes(&quot;user&quot;)`将模型中`user`属性存入`HttpSession`，实现跨请求共享（如多步骤表单）。"
    },
    {
        "id": 112,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@RequestHeader`注解的`required`属性默认值是（ ）",
        "options": [
            {
                "id": "112-A",
                "label": "A",
                "text": "`true`"
            },
            {
                "id": "112-B",
                "label": "B",
                "text": "`false`"
            },
            {
                "id": "112-C",
                "label": "C",
                "text": "取决于请求头类型"
            },
            {
                "id": "112-D",
                "label": "D",
                "text": "以上都不对"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@RequestHeader`默认要求请求头必须存在，否则抛异常；可设置`required =\r\n              false`允许缺失。"
    },
    {
        "id": 113,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC的`SimpleUrlHandlerMapping`的作用是（ ）",
        "options": [
            {
                "id": "113-A",
                "label": "A",
                "text": "将URL路径直接映射到Controller实例（非注解式）"
            },
            {
                "id": "113-B",
                "label": "B",
                "text": "解析注解式Controller的`@RequestMapping`"
            },
            {
                "id": "113-C",
                "label": "C",
                "text": "处理静态资源请求"
            },
            {
                "id": "113-D",
                "label": "D",
                "text": "实现RESTful风格映射"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`SimpleUrlHandlerMapping`用于非注解式Controller的URL映射，如`/user\r\n              -&gt; userController`，通过配置文件或代码指定映射关系。"
    },
    {
        "id": 114,
        "category": "SpringMVC",
        "type": "single",
        "text": "`@ExceptionHandler`注解的方法参数中，不能直接接收的是（ ）",
        "options": [
            {
                "id": "114-A",
                "label": "A",
                "text": "异常对象（如`Exception e`）"
            },
            {
                "id": "114-B",
                "label": "B",
                "text": "`HttpServletRequest`"
            },
            {
                "id": "114-C",
                "label": "C",
                "text": "`Model`"
            },
            {
                "id": "114-D",
                "label": "D",
                "text": "视图名（`String viewName`）"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`@ExceptionHandler`方法可接收异常对象、请求/响应对象、模型等，视图名是方法的返回值，而非参数。"
    },
    {
        "id": 115,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，`form`标签库的`path`属性作用是（ ）",
        "options": [
            {
                "id": "115-A",
                "label": "A",
                "text": "绑定表单字段到模型对象的属性（如`path=&quot;name&quot;`绑定到`user.name`）"
            },
            {
                "id": "115-B",
                "label": "B",
                "text": "指定表单提交的URL路径"
            },
            {
                "id": "115-C",
                "label": "C",
                "text": "设置表单字段的名称"
            },
            {
                "id": "115-D",
                "label": "D",
                "text": "指定表单的编码方式"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`path`属性用于数据绑定，与模型对象的属性关联，自动回显值和处理错误信息。"
    },
    {
        "id": 116,
        "category": "SpringMVC",
        "type": "single",
        "text": "以下哪个不是`HttpMessageConverter`的实现类？（ ）",
        "options": [
            {
                "id": "116-A",
                "label": "A",
                "text": "`MappingJackson2HttpMessageConverter`（JSON）"
            },
            {
                "id": "116-B",
                "label": "B",
                "text": "`StringHttpMessageConverter`（字符串）"
            },
            {
                "id": "116-C",
                "label": "C",
                "text": "`ByteArrayHttpMessageConverter`（字节数组）"
            },
            {
                "id": "116-D",
                "label": "D",
                "text": "`ViewResolverHttpMessageConverter`"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`ViewResolver`是视图解析器，与`HttpMessageConverter`（消息转换）无关，无此类实现。"
    },
    {
        "id": 117,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，`@RequestMapping`的`headers`属性作用是（ ）",
        "options": [
            {
                "id": "117-A",
                "label": "A",
                "text": "指定请求必须包含的请求头（如`headers = &quot;Content-Type=application/json&quot;`）"
            },
            {
                "id": "117-B",
                "label": "B",
                "text": "设置响应头"
            },
            {
                "id": "117-C",
                "label": "C",
                "text": "过滤请求头中的敏感信息"
            },
            {
                "id": "117-D",
                "label": "D",
                "text": "定义请求头的编码方式"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`headers`用于限制请求必须包含指定请求头，如仅处理JSON类型的请求。"
    },
    {
        "id": 118,
        "category": "SpringMVC",
        "type": "single",
        "text": "拦截器与过滤器（`Filter`）的区别是（ ）",
        "options": [
            {
                "id": "118-A",
                "label": "A",
                "text": "拦截器基于Java反射，过滤器基于Servlet规范"
            },
            {
                "id": "118-B",
                "label": "B",
                "text": "拦截器仅在Spring MVC中生效，过滤器在所有Servlet容器中生效"
            },
            {
                "id": "118-C",
                "label": "C",
                "text": "拦截器可访问Spring容器中的Bean，过滤器不能"
            },
            {
                "id": "118-D",
                "label": "D",
                "text": "以上都对"
            }
        ],
        "correctAnswer": "D",
        "explanation": "拦截器是Spring\r\n              MVC组件，基于AOP，可集成Spring功能；过滤器是Servlet规范，作用范围更广，不依赖Spring。"
    },
    {
        "id": 119,
        "category": "SpringMVC",
        "type": "single",
        "text": "Spring MVC中，当Controller方法返回`String`类型时，默认表示（ ）",
        "options": [
            {
                "id": "119-A",
                "label": "A",
                "text": "响应体内容"
            },
            {
                "id": "119-B",
                "label": "B",
                "text": "逻辑视图名"
            },
            {
                "id": "119-C",
                "label": "C",
                "text": "重定向URL"
            },
            {
                "id": "119-D",
                "label": "D",
                "text": "模型属性名"
            }
        ],
        "correctAnswer": "B",
        "explanation": "默认返回逻辑视图名（如`return\r\n              &quot;index&quot;`表示解析为`index.jsp`）；若加`@ResponseBody`则表示响应体，加`redirect:`表示重定向。"
    },
    {
        "id": 120,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC的核心组件包括DispatcherServlet、HandlerMapping、Controller等。",
        "options": [
            {
                "id": "120-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "120-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 121,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "DispatcherServlet的作用是接收请求，并将请求分发给对应的Controller。（ ）",
        "options": [
            {
                "id": "121-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "121-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 122,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "在Spring MVC中，@RequestMapping注解只能用于类上，不能用于方法上。（ ）",
        "options": [
            {
                "id": "122-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "122-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "可用于类和方法上类上指定统一前缀方法上指定具体路径"
    },
    {
        "id": 123,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC中，ModelAndView对象用于封装处理结果和视图名称。（ ）",
        "options": [
            {
                "id": "123-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "123-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 124,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "拦截器（Interceptor）在Spring MVC中可以拦截Controller的请求和响应，且可修改请求参数和响应结果。",
        "options": [
            {
                "id": "124-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "124-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 125,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC的视图解析器（ViewResolver）负责将逻辑视图名解析为物理视图地址。",
        "options": [
            {
                "id": "125-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "125-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 126,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "使用@RequestParam注解可以获取URL路径中的参数，如`/user/{id}`中的id。（ ）",
        "options": [
            {
                "id": "126-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "126-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "@RequestParam获取请求参数@PathVariable获取URL路径参数"
    },
    {
        "id": 127,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC中，Controller方法的返回值只能是ModelAndView类型。（ ）",
        "options": [
            {
                "id": "127-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "127-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "还可返回String（视图名、void、JSON对象等"
    },
    {
        "id": 128,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "前端提交的表单数据，在Spring MVC中可通过实体类对象自动封装接收。（ ）",
        "options": [
            {
                "id": "128-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "128-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 129,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC的拦截器可以拦截静态资源（如CSS、JS文件）的请求。",
        "options": [
            {
                "id": "129-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "129-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": "默认不拦截静态资源需配置排除规则"
    },
    {
        "id": 130,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC 中，`@ResponseBody` 注解可以将 Controller 方法的返回值直接转换为 JSON 格式并写入响应体。（ ）",
        "options": [
            {
                "id": "130-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "130-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 131,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "视图解析器的 `prefix` 和 `suffix` 属性分别用于配置视图路径的前缀和后缀，如前缀 &quot;/WEB-INF/views/&quot;、后缀\r\n                &quot;.jsp&quot;。（ ）",
        "options": [
            {
                "id": "131-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "131-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 132,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "`@ExceptionHandler` 注解只能用于处理当前 Controller 中抛出的异常。（ ）",
        "options": [
            {
                "id": "132-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "132-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "配合 `@ControllerAdvice` 注解可实现全局异常处理"
    },
    {
        "id": 133,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC 的拦截器需要实现 `HandlerInterceptor` 接口，并重写 `preHandle`、`postHandle` 和\r\n                `afterCompletion` 方法。（ ）",
        "options": [
            {
                "id": "133-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "133-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 134,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "拦截器的`postHandle` 方法在 Controller 方法执行后、视图渲染前被调用，可在此修改 ModelAndView 对象。（ ）",
        "options": [
            {
                "id": "134-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "134-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 135,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "使用 `@ModelAttribute` 注解可以将请求参数绑定到模型对象，并自动添加到模型中。（ ）",
        "options": [
            {
                "id": "135-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "135-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 136,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring Boot 中，文件上传需要依赖 `MultipartResolver`，且需在配置中手动注册该 Bean。（ ）",
        "options": [
            {
                "id": "136-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "136-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "Spring Boot 中会自动配置 `MultipartResolver`无需手动注册"
    },
    {
        "id": 137,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "`@PathVariable` 注解支持设置参数是否必需，通过 `required` 属性控制，默认值为 `true`。（ ）",
        "options": [
            {
                "id": "137-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "137-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 138,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "静态资源的访问路径可以通过 `spring.mvc.static-path-pattern` 配置，如配置为 &quot;/static/**&quot;。（ ）",
        "options": [
            {
                "id": "138-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "138-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 139,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "`afterCompletion` 方法无论请求处理是否发生异常，都会在视图渲染完成后被调用。（ ）",
        "options": [
            {
                "id": "139-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "139-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 140,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC 中，`DispatcherServlet` 的初始化参数 `contextConfigLocation` 用于指定 Spring MVC\r\n                的配置文件路径。（ ）",
        "options": [
            {
                "id": "140-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "140-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 141,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "`@RequestHeader` 注解用于获取 HTTP 请求头中的信息，如获取 &quot;User-Agent&quot; 信息。（ ）",
        "options": [
            {
                "id": "141-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "141-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 142,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Controller 方法的参数中，`HttpServletRequest` 和 `HttpServletResponse` 对象可由 Spring MVC\r\n                自动注入。（ ）",
        "options": [
            {
                "id": "142-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "142-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 143,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "视图解析器的 `order` 属性用于指定解析顺序，值越小优先级越高。（ ）",
        "options": [
            {
                "id": "143-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "143-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 144,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "拦截器的 `preHandle` 方法返回 `false` 时，会终止请求的后续处理流程。（ ）",
        "options": [
            {
                "id": "144-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "144-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 145,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "`@CookieValue` 注解用于获取 HTTP 请求中的 Cookie 信息。（ ）",
        "options": [
            {
                "id": "145-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "145-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 146,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "Spring MVC 中，模型数据（Model）中的属性会被自动传递到视图中供前端访问。",
        "options": [
            {
                "id": "146-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "146-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 147,
        "category": "SpringMVC",
        "type": "boolean",
        "text": "当 Controller 方法返回 `ModelAndView` 时，若未设置视图名，Spring MVC 会默认使用请求路径作为视图名。（ ）",
        "options": [
            {
                "id": "147-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "147-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 148,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis是一款（ ）",
        "options": [
            {
                "id": "148-A",
                "label": "A",
                "text": "ORM框架"
            },
            {
                "id": "148-B",
                "label": "B",
                "text": "Web框架"
            },
            {
                "id": "148-C",
                "label": "C",
                "text": "依赖注入框架"
            },
            {
                "id": "148-D",
                "label": "D",
                "text": "服务治理框架"
            }
        ],
        "correctAnswer": "T",
        "explanation": "MyBatis是持久层ORM框架，支持自定义SQL，简化数据库操作。"
    },
    {
        "id": 149,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的核心配置文件通常命名为（ ）",
        "options": [
            {
                "id": "149-A",
                "label": "A",
                "text": "`mybatis.xml`"
            },
            {
                "id": "149-B",
                "label": "B",
                "text": "`mybatis-config.xml`"
            },
            {
                "id": "149-C",
                "label": "C",
                "text": "`config.xml`"
            },
            {
                "id": "149-D",
                "label": "D",
                "text": "`mapper.xml`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "核心配置文件默认命名为`mybatis-config.xml`，用于配置数据源、映射器等。"
    },
    {
        "id": 150,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis中，`#{}和${}`的区别是（ ）",
        "options": [
            {
                "id": "150-A",
                "label": "A",
                "text": "两者无区别"
            },
            {
                "id": "150-B",
                "label": "B",
                "text": "`#{} `是预编译占位符，可防止SQL注入；`${}`是字符串拼接，不能防止"
            },
            {
                "id": "150-C",
                "label": "C",
                "text": "`${}`是预编译占位符，可防止SQL注入；`#{} `是字符串拼接，不能防止"
            },
            {
                "id": "150-D",
                "label": "D",
                "text": "`#{} `用于数字类型，`${}`用于字符串类型"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`#{} `会替换为`?`，预编译处理，安全；`${}`直接拼接SQL，有注入风险，适合表名、排序字段等。"
    },
    {
        "id": 151,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的映射文件中，`&lt;select&gt;`标签的`resultType`属性用于（ ）",
        "options": [
            {
                "id": "151-A",
                "label": "A",
                "text": "指定查询SQL"
            },
            {
                "id": "151-B",
                "label": "B",
                "text": "指定查询结果的封装类型"
            },
            {
                "id": "151-C",
                "label": "C",
                "text": "指定参数类型"
            },
            {
                "id": "151-D",
                "label": "D",
                "text": "指定主键生成策略"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`resultType`指定结果类型（如`int`、`User`），简单类型用`resultType`，复杂映射用`resultMap`。"
    },
    {
        "id": 152,
        "category": "MyBatis",
        "type": "single",
        "text": "Mapper接口与映射文件的关联是通过（ ）",
        "options": [
            {
                "id": "152-A",
                "label": "A",
                "text": "映射文件的`namespace`属性与接口全类名一致"
            },
            {
                "id": "152-B",
                "label": "B",
                "text": "接口名与映射文件名一致"
            },
            {
                "id": "152-C",
                "label": "C",
                "text": "注解`@Mapper`指定映射文件路径"
            },
            {
                "id": "152-D",
                "label": "D",
                "text": "核心配置文件中显式配置关联"
            }
        ],
        "correctAnswer": "A",
        "explanation": "映射文件的`namespace`必须等于Mapper接口的全类名，方法名与SQL标签的`id`一致。"
    },
    {
        "id": 153,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis中，获取自动生成的主键值可通过（ ）",
        "options": [
            {
                "id": "153-A",
                "label": "A",
                "text": "`&lt;insert&gt;`标签的`useGeneratedKeys`和`keyProperty`属性"
            },
            {
                "id": "153-B",
                "label": "B",
                "text": "`&lt;selectKey&gt;`标签"
            },
            {
                "id": "153-C",
                "label": "C",
                "text": "A和B均可"
            },
            {
                "id": "153-D",
                "label": "D",
                "text": "无法获取"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>自增主键用`useGeneratedKeys=&quot;true&quot; keyProperty=&quot;id&quot;`；非自增主键（如UUID）用`&lt;selectKey&gt;`。"
    },
    {
        "id": 154,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的一级缓存的作用域是（ ）",
        "options": [
            {
                "id": "154-A",
                "label": "A",
                "text": "`SqlSession`"
            },
            {
                "id": "154-B",
                "label": "B",
                "text": "`Mapper`"
            },
            {
                "id": "154-C",
                "label": "C",
                "text": "应用级"
            },
            {
                "id": "154-D",
                "label": "D",
                "text": "全局"
            }
        ],
        "correctAnswer": "A",
        "explanation": "一级缓存是`SqlSession`级，同一`SqlSession`内相同查询会缓存；二级缓存是`Mapper`级。"
    },
    {
        "id": 155,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪个标签用于定义可重用的SQL片段？（ ）",
        "options": [
            {
                "id": "155-A",
                "label": "A",
                "text": "`&lt;include&gt;`"
            },
            {
                "id": "155-B",
                "label": "B",
                "text": "`&lt;sql&gt;`"
            },
            {
                "id": "155-C",
                "label": "C",
                "text": "`&lt;fragment&gt;`"
            },
            {
                "id": "155-D",
                "label": "D",
                "text": "`&lt;part&gt;`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`&lt;sql id=&quot;baseColumn&quot;&gt;id,name&lt;/sql&gt;`定义片段，`&lt;include refid=&quot;baseColumn&quot;/&gt;`引入。"
    },
    {
        "id": 156,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的动态SQL中，`&lt;where&gt;`标签的作用是（ ）",
        "options": [
            {
                "id": "156-A",
                "label": "A",
                "text": "生成`WHERE`关键字"
            },
            {
                "id": "156-B",
                "label": "B",
                "text": "自动去除`WHERE`后多余的`AND`或`OR`"
            },
            {
                "id": "156-C",
                "label": "C",
                "text": "条件判断"
            },
            {
                "id": "156-D",
                "label": "D",
                "text": "循环遍历集合"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`&lt;where&gt;`会自动添加`WHERE`，并去除内部SQL开头的`AND/OR`，简化条件拼接。"
    },
    {
        "id": 157,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`SqlSession`的特点是（ ）",
        "options": [
            {
                "id": "157-A",
                "label": "A",
                "text": "线程安全，可共享"
            },
            {
                "id": "157-B",
                "label": "B",
                "text": "非线程安全，每个线程单独创建"
            },
            {
                "id": "157-C",
                "label": "C",
                "text": "应用启动时创建，全局唯一"
            },
            {
                "id": "157-D",
                "label": "D",
                "text": "无需关闭，自动释放资源"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`SqlSession`非线程安全，需为每个线程创建，使用后需关闭（`close()`）。"
    },
    {
        "id": 158,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;foreach&gt;`标签不支持以下哪种集合类型？（ ）",
        "options": [
            {
                "id": "158-A",
                "label": "A",
                "text": "List"
            },
            {
                "id": "158-B",
                "label": "B",
                "text": "Array"
            },
            {
                "id": "158-C",
                "label": "C",
                "text": "Map"
            },
            {
                "id": "158-D",
                "label": "D",
                "text": "基本数据类型（如int）"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`&lt;foreach&gt;`用于遍历集合（List、Array、Map），基本数据类型无法直接遍历。"
    },
    {
        "id": 159,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`typeAliases`配置的作用是（ ）",
        "options": [
            {
                "id": "159-A",
                "label": "A",
                "text": "给类名起别名，简化映射文件配置"
            },
            {
                "id": "159-B",
                "label": "B",
                "text": "定义SQL片段别名"
            },
            {
                "id": "159-C",
                "label": "C",
                "text": "给Mapper接口起别名"
            },
            {
                "id": "159-D",
                "label": "D",
                "text": "给表名起别名"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>如`&lt;typeAlias type=&quot;com.example.User&quot; alias=&quot;User&quot;/&gt;`，映射文件中可直接用`resultType=&quot;User&quot;`。"
    },
    {
        "id": 160,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪个标签用于更新操作？（ ）",
        "options": [
            {
                "id": "160-A",
                "label": "A",
                "text": "`&lt;insert&gt;`"
            },
            {
                "id": "160-B",
                "label": "B",
                "text": "`&lt;update&gt;`"
            },
            {
                "id": "160-C",
                "label": "C",
                "text": "`&lt;delete&gt;`"
            },
            {
                "id": "160-D",
                "label": "D",
                "text": "`&lt;select&gt;`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`&lt;insert&gt;`插入，`&lt;update&gt;`更新，`&lt;delete&gt;`删除，`&lt;select&gt;`查询。"
    },
    {
        "id": 161,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`resultMap`的`id`标签的作用是（ ）",
        "options": [
            {
                "id": "161-A",
                "label": "A",
                "text": "指定结果集的唯一标识"
            },
            {
                "id": "161-B",
                "label": "B",
                "text": "指定主键字段的映射关系"
            },
            {
                "id": "161-C",
                "label": "C",
                "text": "定义结果集的名称"
            },
            {
                "id": "161-D",
                "label": "D",
                "text": "关联其他`resultMap`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`&lt;id&gt;`标签用于映射主键字段，MyBatis会根据主键优化缓存和结果映射。"
    },
    {
        "id": 162,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪种方式不能实现MyBatis的接口绑定？（ ）",
        "options": [
            {
                "id": "162-A",
                "label": "A",
                "text": "映射文件的`namespace`与接口全类名一致"
            },
            {
                "id": "162-B",
                "label": "B",
                "text": "在接口方法上使用`@Select`等注解"
            },
            {
                "id": "162-C",
                "label": "C",
                "text": "手动编写接口的实现类"
            },
            {
                "id": "162-D",
                "label": "D",
                "text": "核心配置文件中配置`mappers`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "MyBatis通过动态代理自动生成接口实现类，无需手动编写。"
    },
    {
        "id": 163,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;choose&gt;`标签的作用是（ ）",
        "options": [
            {
                "id": "163-A",
                "label": "A",
                "text": "循环遍历"
            },
            {
                "id": "163-B",
                "label": "B",
                "text": "条件判断（类似if-else if-else）"
            },
            {
                "id": "163-C",
                "label": "C",
                "text": "拼接`WHERE`条件"
            },
            {
                "id": "163-D",
                "label": "D",
                "text": "拼接`SET`条件"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`&lt;choose&gt;`包含`&lt;when&gt;`（if）和`&lt;otherwise&gt;`（else），实现多条件分支。"
    },
    {
        "id": 164,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`SqlSessionFactory`的作用是（ ）",
        "options": [
            {
                "id": "164-A",
                "label": "A",
                "text": "执行SQL语句"
            },
            {
                "id": "164-B",
                "label": "B",
                "text": "创建`SqlSession`实例"
            },
            {
                "id": "164-C",
                "label": "C",
                "text": "管理事务"
            },
            {
                "id": "164-D",
                "label": "D",
                "text": "映射SQL语句"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`SqlSessionFactory`是`SqlSession`的工厂，负责创建`SqlSession`，线程安全。"
    },
    {
        "id": 165,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`@Mapper`注解的作用是（ ）",
        "options": [
            {
                "id": "165-A",
                "label": "A",
                "text": "标记接口为Mapper接口，自动扫描"
            },
            {
                "id": "165-B",
                "label": "B",
                "text": "定义SQL语句"
            },
            {
                "id": "165-C",
                "label": "C",
                "text": "指定映射文件路径"
            },
            {
                "id": "165-D",
                "label": "D",
                "text": "开启二级缓存"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Mapper`标注接口后，MyBatis会自动扫描并生成代理实现类，替代核心配置文件中的`&lt;mappers&gt;`配置。"
    },
    {
        "id": 166,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;set&gt;`标签的作用是（ ）",
        "options": [
            {
                "id": "166-A",
                "label": "A",
                "text": "生成`SET`关键字"
            },
            {
                "id": "166-B",
                "label": "B",
                "text": "自动去除`SET`后多余的逗号"
            },
            {
                "id": "166-C",
                "label": "C",
                "text": "条件判断"
            },
            {
                "id": "166-D",
                "label": "D",
                "text": "用于更新操作的条件拼接"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`&lt;set&gt;`在更新时使用，自动添加`SET`并去除末尾逗号，如`&lt;set&gt;&lt;if test=&quot;name != null&quot;&gt;name=#{name},&lt;/if&gt;&lt;/set&gt;`。"
    },
    {
        "id": 167,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪个标签用于处理批量插入？（ ）",
        "options": [
            {
                "id": "167-A",
                "label": "A",
                "text": "`&lt;insert&gt;` + `&lt;foreach&gt;`"
            },
            {
                "id": "167-B",
                "label": "B",
                "text": "`&lt;batch&gt;`"
            },
            {
                "id": "167-C",
                "label": "C",
                "text": "`&lt;insertBatch&gt;`"
            },
            {
                "id": "167-D",
                "label": "D",
                "text": "`&lt;bulkInsert&gt;`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>MyBatis无专门批量插入标签，通过`&lt;insert&gt;`结合`&lt;foreach&gt;`遍历集合实现，如`insert into user values &lt;foreach collection=&quot;list&quot; item=&quot;u&quot; separator=&quot;,&quot;&gt;(#{u.id},#{u.name})&lt;/foreach&gt;`。"
    },
    {
        "id": 168,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`plugins`配置的作用是（ ）",
        "options": [
            {
                "id": "168-A",
                "label": "A",
                "text": "引入外部插件（如分页插件）"
            },
            {
                "id": "168-B",
                "label": "B",
                "text": "配置数据源插件"
            },
            {
                "id": "168-C",
                "label": "C",
                "text": "配置缓存插件"
            },
            {
                "id": "168-D",
                "label": "D",
                "text": "配置日志插件"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`plugins`用于注册拦截器（如PageHelper分页插件），拦截SQL执行过程。"
    },
    {
        "id": 169,
        "category": "MyBatis",
        "type": "single",
        "text": "`resultMap`的`extends`属性的作用是（ ）",
        "options": [
            {
                "id": "169-A",
                "label": "A",
                "text": "关联其他`resultMap`"
            },
            {
                "id": "169-B",
                "label": "B",
                "text": "继承其他`resultMap`的配置，减少冗余"
            },
            {
                "id": "169-C",
                "label": "C",
                "text": "指定父类实体"
            },
            {
                "id": "169-D",
                "label": "D",
                "text": "定义嵌套映射"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`extends`可继承另一个`resultMap`的配置，如`&lt;resultMap id=&quot;userMap&quot; extends=&quot;baseMap&quot;&gt;`。"
    },
    {
        "id": 170,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`@Param`注解的作用是（ ）",
        "options": [
            {
                "id": "170-A",
                "label": "A",
                "text": "给方法参数命名，便于映射文件中引用"
            },
            {
                "id": "170-B",
                "label": "B",
                "text": "指定参数类型"
            },
            {
                "id": "170-C",
                "label": "C",
                "text": "标记参数为必需"
            },
            {
                "id": "170-D",
                "label": "D",
                "text": "开启参数缓存"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>如`User selectById(@Param(&quot;id&quot;) int userId)`，映射文件中可用`#{id}`引用参数。"
    },
    {
        "id": 171,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的映射文件中，`&lt;delete&gt;`标签的`parameterType`属性用于（ ）",
        "options": [
            {
                "id": "171-A",
                "label": "A",
                "text": "指定删除SQL"
            },
            {
                "id": "171-B",
                "label": "B",
                "text": "指定参数类型"
            },
            {
                "id": "171-C",
                "label": "C",
                "text": "指定返回值类型"
            },
            {
                "id": "171-D",
                "label": "D",
                "text": "指定主键字段"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`parameterType`指定传入参数的类型（如`int`、`User`），可选，MyBatis可自动推断。"
    },
    {
        "id": 172,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;trim&gt;`标签不包含以下哪个属性？（ ）",
        "options": [
            {
                "id": "172-A",
                "label": "A",
                "text": "`prefix`"
            },
            {
                "id": "172-B",
                "label": "B",
                "text": "`suffix`"
            },
            {
                "id": "172-C",
                "label": "C",
                "text": "`prefixOverrides`"
            },
            {
                "id": "172-D",
                "label": "D",
                "text": "`loop`"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`&lt;trim&gt;`的属性包括`prefix`（前缀）、`suffix`（后缀）、`prefixOverrides`（去除前缀内容）、`suffixOverrides`（去除后缀内容），无`loop`。"
    },
    {
        "id": 173,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪个注解用于在Mapper接口方法上定义查询SQL？（ ）",
        "options": [
            {
                "id": "173-A",
                "label": "A",
                "text": "`@Insert`"
            },
            {
                "id": "173-B",
                "label": "B",
                "text": "`@Update`"
            },
            {
                "id": "173-C",
                "label": "C",
                "text": "`@Select`"
            },
            {
                "id": "173-D",
                "label": "D",
                "text": "`@Delete`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Select(&quot;select * from user where id = #{id}&quot;)`用于定义查询SQL，其他注解对应增删改。"
    },
    {
        "id": 174,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;if&gt;`标签的`test`属性用于（ ）",
        "options": [
            {
                "id": "174-A",
                "label": "A",
                "text": "指定参数名称"
            },
            {
                "id": "174-B",
                "label": "B",
                "text": "条件判断表达式（OGNL）"
            },
            {
                "id": "174-C",
                "label": "C",
                "text": "指定SQL片段"
            },
            {
                "id": "174-D",
                "label": "D",
                "text": "循环变量名"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`test`属性值为OGNL表达式，如`&lt;if test=&quot;name != null and name != &#x27;&#x27;&quot;&gt;`。"
    },
    {
        "id": 175,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`resultType`和`resultMap`的关系是（ ）",
        "options": [
            {
                "id": "175-A",
                "label": "A",
                "text": "两者不能同时使用"
            },
            {
                "id": "175-B",
                "label": "B",
                "text": "`resultMap`是`resultType`的扩展，用于复杂映射"
            },
            {
                "id": "175-C",
                "label": "C",
                "text": "`resultType`用于集合类型，`resultMap`用于对象类型"
            },
            {
                "id": "175-D",
                "label": "D",
                "text": "两者功能完全相同"
            }
        ],
        "correctAnswer": "B",
        "explanation": "简单类型映射用`resultType`，复杂映射（如关联查询）用`resultMap`，两者互斥。"
    },
    {
        "id": 176,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`SqlSession`的`selectOne`方法的作用是（ ）",
        "options": [
            {
                "id": "176-A",
                "label": "A",
                "text": "执行查询，返回一个结果对象"
            },
            {
                "id": "176-B",
                "label": "B",
                "text": "执行查询，返回多个结果对象（List）"
            },
            {
                "id": "176-C",
                "label": "C",
                "text": "执行插入操作"
            },
            {
                "id": "176-D",
                "label": "D",
                "text": "执行更新操作"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`selectOne`返回单个对象，`selectList`返回集合；增删改用`insert`、`update`、`delete`。"
    },
    {
        "id": 177,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪种不是MyBatis的分页方式？（ ）",
        "options": [
            {
                "id": "177-A",
                "label": "A",
                "text": "SQL中直接写`LIMIT`（MySQL）或`ROWNUM`（Oracle）"
            },
            {
                "id": "177-B",
                "label": "B",
                "text": "使用分页插件（如PageHelper）"
            },
            {
                "id": "177-C",
                "label": "C",
                "text": "通过`RowBounds`类"
            },
            {
                "id": "177-D",
                "label": "D",
                "text": "使用`&lt;page&gt;`标签"
            }
        ],
        "correctAnswer": "D",
        "explanation": "MyBatis无`&lt;page&gt;`标签，分页可通过SQL、插件或`RowBounds`实现。"
    },
    {
        "id": 178,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`typeHandlers`配置的作用是（ ）",
        "options": [
            {
                "id": "178-A",
                "label": "A",
                "text": "处理Java类型与数据库类型的转换"
            },
            {
                "id": "178-B",
                "label": "B",
                "text": "定义类型别名"
            },
            {
                "id": "178-C",
                "label": "C",
                "text": "处理动态SQL"
            },
            {
                "id": "178-D",
                "label": "D",
                "text": "配置缓存策略"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`typeHandlers`用于自定义类型转换（如Java的Date与数据库的VARCHAR转换）。"
    },
    {
        "id": 179,
        "category": "MyBatis",
        "type": "single",
        "text": "当MyBatis查询结果为多个对象时，若使用`selectOne`方法会（ ）",
        "options": [
            {
                "id": "179-A",
                "label": "A",
                "text": "返回第一个对象"
            },
            {
                "id": "179-B",
                "label": "B",
                "text": "抛出`TooManyResultsException`"
            },
            {
                "id": "179-C",
                "label": "C",
                "text": "返回`null`"
            },
            {
                "id": "179-D",
                "label": "D",
                "text": "返回所有对象的集合"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`selectOne`期望返回单个结果，若查询到多个，会抛出`TooManyResultsException`。"
    },
    {
        "id": 180,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的映射文件中，`&lt;insert&gt;`标签的`keyProperty`属性作用是（ ）",
        "options": [
            {
                "id": "180-A",
                "label": "A",
                "text": "指定插入SQL的主键字段名"
            },
            {
                "id": "180-B",
                "label": "B",
                "text": "指定JavaBean中接收自动生成主键值的属性名"
            },
            {
                "id": "180-C",
                "label": "C",
                "text": "指定主键生成策略"
            },
            {
                "id": "180-D",
                "label": "D",
                "text": "指定主键的数据类型"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`keyProperty`与`useGeneratedKeys=&quot;true&quot;`配合，将数据库自动生成的主键值回写到JavaBean的指定属性（如`keyProperty=&quot;id&quot;`）。"
    },
    {
        "id": 181,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪种情况适合使用`${}`而非`#{} `？（ ）",
        "options": [
            {
                "id": "181-A",
                "label": "A",
                "text": "传递查询条件参数（如`where name = ?`）"
            },
            {
                "id": "181-B",
                "label": "B",
                "text": "传递表名或排序字段（如`order by ${column}`）"
            },
            {
                "id": "181-C",
                "label": "C",
                "text": "传递数字类型参数（如`where age = ?`）"
            },
            {
                "id": "181-D",
                "label": "D",
                "text": "传递字符串类型参数（如`where email = ?`）"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`${}`是字符串拼接，适合动态表名、排序字段等无法用预编译的场景；`#{} `是预编译占位符，防止SQL注入，适合参数传递。"
    },
    {
        "id": 182,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;choose&gt;`标签中，`&lt;otherwise&gt;`标签的作用是（ ）",
        "options": [
            {
                "id": "182-A",
                "label": "A",
                "text": "当所有`&lt;when&gt;`条件不满足时执行"
            },
            {
                "id": "182-B",
                "label": "B",
                "text": "当任意`&lt;when&gt;`条件满足时执行"
            },
            {
                "id": "182-C",
                "label": "C",
                "text": "无条件执行"
            },
            {
                "id": "182-D",
                "label": "D",
                "text": "嵌套其他`&lt;choose&gt;`标签"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`&lt;choose&gt;`类似Java的`switch`，`&lt;when&gt;`类似`case`，`&lt;otherwise&gt;`类似`default`，仅当所有`&lt;when&gt;`条件不满足时执行。"
    },
    {
        "id": 183,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪个标签用于在映射文件中定义接口方法与SQL的绑定？（ ）",
        "options": [
            {
                "id": "183-A",
                "label": "A",
                "text": "`&lt;mapper&gt;`"
            },
            {
                "id": "183-B",
                "label": "B",
                "text": "`&lt;select&gt;`、`&lt;insert&gt;`等SQL标签（`id`与方法名一致）"
            },
            {
                "id": "183-C",
                "label": "C",
                "text": "`&lt;method&gt;`"
            },
            {
                "id": "183-D",
                "label": "D",
                "text": "`&lt;bind&gt;`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>映射文件的`namespace`与Mapper接口全类名一致，SQL标签的`id`与接口方法名一致，实现方法与SQL的绑定。"
    },
    {
        "id": 184,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的二级缓存默认的清除策略（`eviction`）是（ ）",
        "options": [
            {
                "id": "184-A",
                "label": "A",
                "text": "`LRU`（最近最少使用）"
            },
            {
                "id": "184-B",
                "label": "B",
                "text": "`FIFO`（先进先出）"
            },
            {
                "id": "184-C",
                "label": "C",
                "text": "`SOFT`（软引用）"
            },
            {
                "id": "184-D",
                "label": "D",
                "text": "`WEAK`（弱引用）"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`&lt;cache eviction=&quot;LRU&quot;/&gt;`是默认配置，当缓存满时，移除最近最少使用的对象；其他策略需显式指定。"
    },
    {
        "id": 185,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;foreach&gt;`标签中，`separator`属性的作用是（ ）",
        "options": [
            {
                "id": "185-A",
                "label": "A",
                "text": "指定循环变量名"
            },
            {
                "id": "185-B",
                "label": "B",
                "text": "指定集合的类型（如`list`、`array`）"
            },
            {
                "id": "185-C",
                "label": "C",
                "text": "指定循环元素之间的分隔符（如逗号）"
            },
            {
                "id": "185-D",
                "label": "D",
                "text": "指定循环的开始和结束符号"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`separator`用于设置循环生成的SQL片段之间的分隔符，如批量插入时的逗号（`separator=&quot;,&quot;`）。"
    },
    {
        "id": 186,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪种方式不能实现MyBatis的分页查询？（ ）",
        "options": [
            {
                "id": "186-A",
                "label": "A",
                "text": "SQL中直接添加`LIMIT`（MySQL）或`ROW_NUMBER()`（SQL Server）"
            },
            {
                "id": "186-B",
                "label": "B",
                "text": "使用`RowBounds`参数（`selectList`方法的第二个参数）"
            },
            {
                "id": "186-C",
                "label": "C",
                "text": "使用`pageHelper`插件"
            },
            {
                "id": "186-D",
                "label": "D",
                "text": "使用`&lt;page&gt;`标签"
            }
        ],
        "correctAnswer": "D",
        "explanation": "MyBatis无`&lt;page&gt;`标签，分页需通过原生SQL、`RowBounds`或第三方插件实现。"
    },
    {
        "id": 187,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的映射文件中，`&lt;selectKey&gt;`标签的`order`属性取值为`BEFORE`时，表示（ ）",
        "options": [
            {
                "id": "187-A",
                "label": "A",
                "text": "在插入语句执行后获取主键"
            },
            {
                "id": "187-B",
                "label": "B",
                "text": "在插入语句执行前获取主键（如UUID）"
            },
            {
                "id": "187-C",
                "label": "C",
                "text": "与插入语句同时执行"
            },
            {
                "id": "187-D",
                "label": "D",
                "text": "忽略主键生成"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`order=&quot;BEFORE&quot;`表示先执行`&lt;selectKey&gt;`中的SQL获取主键，再代入插入语句（适合UUID等非自增主键）；`AFTER`表示插入后获取（适合自增主键）。"
    },
    {
        "id": 188,
        "category": "MyBatis",
        "type": "single",
        "text": "关于MyBatis的`SqlSession`，以下说法错误的是（ ）",
        "options": [
            {
                "id": "188-A",
                "label": "A",
                "text": "`SqlSession`是线程不安全的，需为每个线程创建独立实例"
            },
            {
                "id": "188-B",
                "label": "B",
                "text": "`SqlSession`的`close()`方法必须调用，否则可能导致连接泄漏"
            },
            {
                "id": "188-C",
                "label": "C",
                "text": "`SqlSession`可通过`getMapper()`方法获取Mapper接口的代理对象"
            },
            {
                "id": "188-D",
                "label": "D",
                "text": "`SqlSession`的`selectOne()`方法可返回多个结果对象"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`selectOne()`期望返回单个结果，若查询到多个会抛出`TooManyResultsException`；返回多个结果需用`selectList()`。"
    },
    {
        "id": 189,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;trim&gt;`标签中，`suffixOverrides`属性的作用是（ ）",
        "options": [
            {
                "id": "189-A",
                "label": "A",
                "text": "给SQL片段添加前缀"
            },
            {
                "id": "189-B",
                "label": "B",
                "text": "给SQL片段添加后缀"
            },
            {
                "id": "189-C",
                "label": "C",
                "text": "去除SQL片段末尾的指定内容（如逗号）"
            },
            {
                "id": "189-D",
                "label": "D",
                "text": "去除SQL片段开头的指定内容（如`AND`）"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`suffixOverrides=&quot;,&quot;`表示去除SQL片段末尾的逗号，常用于动态`SET`或`IN`条件拼接。"
    },
    {
        "id": 190,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪个注解用于在Mapper接口方法上定义更新SQL？（ ）",
        "options": [
            {
                "id": "190-A",
                "label": "A",
                "text": "`@Update`"
            },
            {
                "id": "190-B",
                "label": "B",
                "text": "`@Modify`"
            },
            {
                "id": "190-C",
                "label": "C",
                "text": "`@UpdateByExample`"
            },
            {
                "id": "190-D",
                "label": "D",
                "text": "`@UpdateMapping`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Update(&quot;update user set name = #{name} where id = #{id}&quot;)`用于定义更新SQL，是MyBatis的核心注解之一。"
    },
    {
        "id": 191,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`mapper`接口方法参数为`Map`时，映射文件中引用参数的方式是（ ）",
        "options": [
            {
                "id": "191-A",
                "label": "A",
                "text": "`#{key}`（`key`为Map中的键）"
            },
            {
                "id": "191-B",
                "label": "B",
                "text": "`#{map.key}`"
            },
            {
                "id": "191-C",
                "label": "C",
                "text": "`#{param.key}`"
            },
            {
                "id": "191-D",
                "label": "D",
                "text": "`#{0.key}`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>参数为`Map`时，直接通过`#{key}`引用Map中的值，如`Map&lt;String, Object&gt; params = new HashMap&lt;&gt;(); params.put(&quot;id&quot;, 1);`，映射文件中用`#{id}`。"
    },
    {
        "id": 192,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`@MapperScan`注解的作用是（ ）",
        "options": [
            {
                "id": "192-A",
                "label": "A",
                "text": "扫描指定包下的Mapper接口，自动生成代理实现类"
            },
            {
                "id": "192-B",
                "label": "B",
                "text": "扫描映射文件"
            },
            {
                "id": "192-C",
                "label": "C",
                "text": "注册自定义类型处理器"
            },
            {
                "id": "192-D",
                "label": "D",
                "text": "开启二级缓存"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@MapperScan(&quot;com.example.mapper&quot;)`替代在每个Mapper接口上标注`@Mapper`，批量扫描指定包下的接口。"
    },
    {
        "id": 193,
        "category": "MyBatis",
        "type": "single",
        "text": "以下哪个标签用于在映射文件中引用其他SQL片段？（ ）",
        "options": [
            {
                "id": "193-A",
                "label": "A",
                "text": "`&lt;import&gt;`"
            },
            {
                "id": "193-B",
                "label": "B",
                "text": "`&lt;include&gt;`"
            },
            {
                "id": "193-C",
                "label": "C",
                "text": "`&lt;ref&gt;`"
            },
            {
                "id": "193-D",
                "label": "D",
                "text": "`&lt;use&gt;`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`&lt;include refid=&quot;baseColumns&quot;/&gt;`用于引用`&lt;sql id=&quot;baseColumns&quot;&gt;id,name&lt;/sql&gt;`定义的SQL片段，减少重复配置。"
    },
    {
        "id": 194,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`lazyLoadingEnabled`全局配置的作用是（ ）",
        "options": [
            {
                "id": "194-A",
                "label": "A",
                "text": "开启所有关联查询的延迟加载"
            },
            {
                "id": "194-B",
                "label": "B",
                "text": "开启一级缓存"
            },
            {
                "id": "194-C",
                "label": "C",
                "text": "开启二级缓存"
            },
            {
                "id": "194-D",
                "label": "D",
                "text": "开启批量操作优化"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`lazyLoadingEnabled=true`（默认`false`）开启全局延迟加载，关联对象在首次访问时才会查询数据库。"
    },
    {
        "id": 195,
        "category": "MyBatis",
        "type": "single",
        "text": "动态SQL的`&lt;bind&gt;`标签的作用是（ ）",
        "options": [
            {
                "id": "195-A",
                "label": "A",
                "text": "定义一个变量并绑定到上下文，供后续SQL使用（如模糊查询）"
            },
            {
                "id": "195-B",
                "label": "B",
                "text": "绑定参数到JavaBean属性"
            },
            {
                "id": "195-C",
                "label": "C",
                "text": "关联其他`resultMap`"
            },
            {
                "id": "195-D",
                "label": "D",
                "text": "绑定Mapper接口方法"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>如`&lt;bind name=&quot;likeName&quot; value=&quot;&#x27;%&#x27; + name + &#x27;%&#x27;&quot;/&gt;`，后续可通过`#{likeName}`使用，解决不同数据库模糊查询语法差异。"
    },
    {
        "id": 196,
        "category": "MyBatis",
        "type": "single",
        "text": "MyBatis的`@Result`注解的`column`属性作用是（ ）",
        "options": [
            {
                "id": "196-A",
                "label": "A",
                "text": "指定JavaBean的属性名"
            },
            {
                "id": "196-B",
                "label": "B",
                "text": "指定数据库表的列名"
            },
            {
                "id": "196-C",
                "label": "C",
                "text": "指定结果映射的名称"
            },
            {
                "id": "196-D",
                "label": "D",
                "text": "指定关联查询的`resultMap`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Result(column = &quot;user_name&quot;, property = &quot;userName&quot;)`表示数据库列`user_name`映射到JavaBean的`userName`属性。"
    },
    {
        "id": 197,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis是一款优秀的持久层框架，它支持自定义SQL、存储过程以及高级映射。",
        "options": [
            {
                "id": "197-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "197-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 198,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的核心配置文件（mybatis-config.xml）中，必须配置数据源和映射器（mapper）。",
        "options": [
            {
                "id": "198-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "198-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 199,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis中，#{}和${}都可以用于参数占位符，且都能防止SQL注入。（ ）",
        "options": [
            {
                "id": "199-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "199-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "#{}可防止SQL注入${}是字符串拼接不能防止SQL注入"
    },
    {
        "id": 200,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的接口绑定（Mapper接口）方式中，Mapper接口的方法名必须与映射文件中SQL标签的`id`一致。",
        "options": [
            {
                "id": "200-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "200-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 201,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis支持一对一、一对多和多对多的关联查询映射。（ ）",
        "options": [
            {
                "id": "201-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "201-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 202,
        "category": "MyBatis",
        "type": "boolean",
        "text": "在MyBatis中，使用`&lt;insert&gt;`标签插入数据后，无法获取自动生成的主键值。（ ）",
        "options": [
            {
                "id": "202-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "202-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "可通过`useGeneratedKeys`和`keyProperty`属性获取自动生成的主键"
    },
    {
        "id": 203,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的缓存分为一级缓存（SqlSession级）和二级缓存（Mapper级），一级缓存默认开启。",
        "options": [
            {
                "id": "203-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "203-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 204,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis中，当查询结果为单个对象时，若查询无结果，会抛出NullPointerException。（ ）",
        "options": [
            {
                "id": "204-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "204-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "查询无结果时返回null不会抛出异常"
    },
    {
        "id": 205,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis是一个ORM框架，可简化JDBC操作。（ ）",
        "options": [
            {
                "id": "205-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "205-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 206,
        "category": "MyBatis",
        "type": "boolean",
        "text": "一级缓存默认开启，作用范围是整个应用。（ ）",
        "options": [
            {
                "id": "206-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "206-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "一级缓存作用范围是SqlSession"
    },
    {
        "id": 207,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`&lt;insert&gt;`标签的`useGeneratedKeys=&quot;true&quot;`可用于获取数据库自动生成的主键。（ ）",
        "options": [
            {
                "id": "207-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "207-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 208,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的映射文件中，`namespace`必须与Mapper接口的全类名一致。（ ）",
        "options": [
            {
                "id": "208-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "208-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 209,
        "category": "MyBatis",
        "type": "boolean",
        "text": "二级缓存默认开启，需要手动配置才能生效。（ ）",
        "options": [
            {
                "id": "209-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "209-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "二级缓存默认关闭需通过`&lt;cache&gt;`标签开启"
    },
    {
        "id": 210,
        "category": "MyBatis",
        "type": "boolean",
        "text": "动态SQL的`&lt;if&gt;`标签中，`test`属性支持OGNL表达式。（ ）",
        "options": [
            {
                "id": "210-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "210-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 211,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`&lt;collection&gt;`标签用于处理一对一关联查询。（ ）",
        "options": [
            {
                "id": "211-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "211-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`&lt;collection&gt;`处理一对多`&lt;association&gt;`处理一对一"
    },
    {
        "id": 212,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的`SqlSession`是线程安全的，可在多线程中共享。（ ）",
        "options": [
            {
                "id": "212-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "212-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "SqlSession线程不安全需为每个线程创建独立实例"
    },
    {
        "id": 213,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`@Mapper`注解用于标记接口为MyBatis的Mapper接口。（ ）",
        "options": [
            {
                "id": "213-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "213-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 214,
        "category": "MyBatis",
        "type": "boolean",
        "text": "二级缓存中，不同namespace的缓存是相互独立的。（ ）",
        "options": [
            {
                "id": "214-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "214-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 215,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`&lt;trim&gt;`标签的`prefix`属性用于给SQL片段添加前缀。（ ）",
        "options": [
            {
                "id": "215-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "215-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 216,
        "category": "MyBatis",
        "type": "boolean",
        "text": "当Mapper接口方法参数为多个时，必须使用`@Param`注解指定参数名。（ ）",
        "options": [
            {
                "id": "216-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "216-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": "否则无法在映射文件中正确引用"
    },
    {
        "id": 217,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis一级缓存会在执行`commit（对 ）`或`rollback（F ）`后清空。",
        "options": [
            {
                "id": "217-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "217-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 218,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`&lt;choose&gt;`标签中可以包含多个`&lt;otherwise&gt;`标签。",
        "options": [
            {
                "id": "218-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "218-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": "`&lt;otherwise&gt;`只能有一个类似default"
    },
    {
        "id": 219,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`@ResultMap`注解用于引用XML中定义的`resultMap`。（ ）",
        "options": [
            {
                "id": "219-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "219-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 220,
        "category": "MyBatis",
        "type": "boolean",
        "text": "动态SQL的`&lt;foreach&gt;`标签中，`item`属性用于指定循环变量名。（ ）",
        "options": [
            {
                "id": "220-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "220-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 221,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis支持通过接口方式和XML方式两种方式编写SQL。（ ）",
        "options": [
            {
                "id": "221-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "221-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 222,
        "category": "MyBatis",
        "type": "boolean",
        "text": "延迟加载（懒加载）需要在全局配置中开启`lazyLoadingEnabled`。",
        "options": [
            {
                "id": "222-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "222-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 223,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`&lt;set&gt;`标签可自动去除SQL语句末尾多余的逗号。（ ）",
        "options": [
            {
                "id": "223-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "223-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 224,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`@Update`注解可直接在Mapper接口方法上定义更新SQL。（ ）",
        "options": [
            {
                "id": "224-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "224-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 225,
        "category": "MyBatis",
        "type": "boolean",
        "text": "映射文件中的`&lt;sql&gt;`标签用于定义可复用的SQL片段，通过`&lt;include&gt;`引用。（ ）",
        "options": [
            {
                "id": "225-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "225-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 226,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的`typeAliases`配置可给Java类型定义别名，简化映射文件编写。（ ）",
        "options": [
            {
                "id": "226-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "226-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 227,
        "category": "MyBatis",
        "type": "boolean",
        "text": "动态SQL的`&lt;where&gt;`标签会自动去除条件开头多余的`AND`或`OR`。（ ）",
        "options": [
            {
                "id": "227-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "227-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 228,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`&lt;foreach&gt;`标签的`collection`属性在参数为List时，默认值是`list`。（ ）",
        "options": [
            {
                "id": "228-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "228-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 229,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的`mapperLocations`配置用于指定映射文件的位置。（ ）",
        "options": [
            {
                "id": "229-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "229-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 230,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的一级缓存和二级缓存都默认开启。（ ）",
        "options": [
            {
                "id": "230-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "230-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "一级缓存默认开启二级缓存默认关闭"
    },
    {
        "id": 231,
        "category": "MyBatis",
        "type": "boolean",
        "text": "Mapper接口可以定义重载方法（方法名相同，参数不同）。",
        "options": [
            {
                "id": "231-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "231-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": "MyBatis不支持接口方法重载会导致映射冲突"
    },
    {
        "id": 232,
        "category": "MyBatis",
        "type": "boolean",
        "text": "二级缓存的`flushInterval`属性用于指定缓存的最大容量。（ ）",
        "options": [
            {
                "id": "232-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "232-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`flushInterval`是自动刷新时间`size`是最大容量"
    },
    {
        "id": 233,
        "category": "MyBatis",
        "type": "boolean",
        "text": "映射文件中的`&lt;delete&gt;`标签不需要指定返回值类型，默认返回受影响的行数。（ ）",
        "options": [
            {
                "id": "233-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "233-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 234,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis的插件可以修改SQL语句的执行逻辑。（ ）",
        "options": [
            {
                "id": "234-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "234-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": "，通过拦截器可增强或修改原逻辑"
    },
    {
        "id": 235,
        "category": "MyBatis",
        "type": "boolean",
        "text": "当全局配置`mapUnderscoreToCamelCase=true`时，数据库列`user_name`会自动映射到Java属性`userName`。（ ）",
        "options": [
            {
                "id": "235-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "235-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 236,
        "category": "MyBatis",
        "type": "boolean",
        "text": "一级缓存的生命周期与`SqlSession`一致，`SqlSession`关闭后缓存失效。（ ）",
        "options": [
            {
                "id": "236-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "236-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 237,
        "category": "MyBatis",
        "type": "boolean",
        "text": "动态SQL的`&lt;when&gt;`标签可以嵌套`&lt;if&gt;`标签。（ ）",
        "options": [
            {
                "id": "237-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "237-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 238,
        "category": "MyBatis",
        "type": "boolean",
        "text": "映射文件中的`resultType`和`resultMap`可以同时使用。（ ）",
        "options": [
            {
                "id": "238-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "238-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "两者互斥只能选其一"
    },
    {
        "id": 239,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`@MapperScan`注解可以批量扫描指定包下的Mapper接口，替代每个接口上的`@Mapper`。（ ）",
        "options": [
            {
                "id": "239-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "239-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 240,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`&lt;include&gt;`标签的`refid`属性用于指定引用的SQL片段的`id`。（ ）",
        "options": [
            {
                "id": "240-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "240-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 241,
        "category": "MyBatis",
        "type": "boolean",
        "text": "MyBatis支持对存储过程的调用。（ ）",
        "options": [
            {
                "id": "241-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "241-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>通过`&lt;select&gt;`标签的`statementType=&quot;CALLABLE&quot;`实现"
    },
    {
        "id": 242,
        "category": "MyBatis",
        "type": "boolean",
        "text": "`SqlSession`的`getMapper（对 ）`方法返回的是Mapper接口的代理实现类。",
        "options": [
            {
                "id": "242-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "242-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 243,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的核心理念是（ ）",
        "options": [
            {
                "id": "243-A",
                "label": "A",
                "text": "配置优先于约定"
            },
            {
                "id": "243-B",
                "label": "B",
                "text": "约定优于配置"
            },
            {
                "id": "243-C",
                "label": "C",
                "text": "完全消除配置"
            },
            {
                "id": "243-D",
                "label": "D",
                "text": "代码优先于配置"
            }
        ],
        "correctAnswer": "F",
        "explanation": "Spring Boot通过“约定优于配置”简化开发，提供默认配置，减少手动配置。"
    },
    {
        "id": 244,
        "category": "SpringBoot",
        "type": "single",
        "text": "创建Spring Boot项目的常用工具是（ ）",
        "options": [
            {
                "id": "244-A",
                "label": "A",
                "text": "Spring Initializr"
            },
            {
                "id": "244-B",
                "label": "B",
                "text": "Maven Archetype"
            },
            {
                "id": "244-C",
                "label": "C",
                "text": "Gradle Template"
            },
            {
                "id": "244-D",
                "label": "D",
                "text": "Eclipse Wizard"
            }
        ],
        "correctAnswer": "A",
        "explanation": "Spring Initializr是官方推荐的项目创建工具，支持网页、IDEA等方式，自动生成骨架。"
    },
    {
        "id": 245,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的入口类需添加哪个注解？（ ）",
        "options": [
            {
                "id": "245-A",
                "label": "A",
                "text": "`@SpringBoot`"
            },
            {
                "id": "245-B",
                "label": "B",
                "text": "`@SpringApplication`"
            },
            {
                "id": "245-C",
                "label": "C",
                "text": "`@SpringBootApplication`"
            },
            {
                "id": "245-D",
                "label": "D",
                "text": "`@EnableSpringBoot`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>入口类需标注`@SpringBootApplication`，该注解包含`@SpringBootConfiguration`、`@EnableAutoConfiguration`、`@ComponentScan`。"
    },
    {
        "id": 246,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot默认内置的Web服务器是（ ）",
        "options": [
            {
                "id": "246-A",
                "label": "A",
                "text": "Nginx"
            },
            {
                "id": "246-B",
                "label": "B",
                "text": "Tomcat"
            },
            {
                "id": "246-C",
                "label": "C",
                "text": "Jetty"
            },
            {
                "id": "246-D",
                "label": "D",
                "text": "Undertow"
            }
        ],
        "correctAnswer": "B",
        "explanation": "默认内置Tomcat，可通过排除依赖切换为Jetty或Undertow。"
    },
    {
        "id": 247,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot项目的配置文件默认名称不包括（ ）",
        "options": [
            {
                "id": "247-A",
                "label": "A",
                "text": "`application.properties`"
            },
            {
                "id": "247-B",
                "label": "B",
                "text": "`application.yaml`"
            },
            {
                "id": "247-C",
                "label": "C",
                "text": "`application.yml`"
            },
            {
                "id": "247-D",
                "label": "D",
                "text": "`springboot.config`"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>默认配置文件为`application.properties`、`application.yaml`、`application.yml`，无`springboot.config`。"
    },
    {
        "id": 248,
        "category": "SpringBoot",
        "type": "single",
        "text": "启动Spring Boot应用的方式不包括（ ）",
        "options": [
            {
                "id": "248-A",
                "label": "A",
                "text": "运行入口类的`main`方法"
            },
            {
                "id": "248-B",
                "label": "B",
                "text": "打包为JAR包，用`java -jar`命令"
            },
            {
                "id": "248-C",
                "label": "C",
                "text": "部署到外部Tomcat（打包为WAR）"
            },
            {
                "id": "248-D",
                "label": "D",
                "text": "通过`maven install`命令"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`maven\r\n              install`是打包命令，不启动应用；启动需`spring-boot:run`或直接运行可执行JAR。"
    },
    {
        "id": 249,
        "category": "SpringBoot",
        "type": "single",
        "text": "`@Value`注解的作用是（ ）",
        "options": [
            {
                "id": "249-A",
                "label": "A",
                "text": "注入配置文件中的属性值"
            },
            {
                "id": "249-B",
                "label": "B",
                "text": "定义Bean的名称"
            },
            {
                "id": "249-C",
                "label": "C",
                "text": "指定Bean的作用域"
            },
            {
                "id": "249-D",
                "label": "D",
                "text": "标记Bean为主要Bean"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Value(&quot;${app.name}&quot;)`用于注入配置文件中的属性值，支持默认值（如`${app.name:default}`）。"
    },
    {
        "id": 250,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的`spring-boot-starter-parent`的作用是（ ）",
        "options": [
            {
                "id": "250-A",
                "label": "A",
                "text": "提供依赖管理，统一版本"
            },
            {
                "id": "250-B",
                "label": "B",
                "text": "定义入口类"
            },
            {
                "id": "250-C",
                "label": "C",
                "text": "配置Web服务器"
            },
            {
                "id": "250-D",
                "label": "D",
                "text": "开启自动配置"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`spring-boot-starter-parent`作为父依赖，管理常用依赖的版本，避免版本冲突。"
    },
    {
        "id": 251,
        "category": "SpringBoot",
        "type": "single",
        "text": "配置文件中，修改默认服务器端口的属性是（ ）",
        "options": [
            {
                "id": "251-A",
                "label": "A",
                "text": "`server.port`"
            },
            {
                "id": "251-B",
                "label": "B",
                "text": "`spring.server.port`"
            },
            {
                "id": "251-C",
                "label": "C",
                "text": "`tomcat.port`"
            },
            {
                "id": "251-D",
                "label": "D",
                "text": "`web.port`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "通过`server.port=8081`修改端口，默认8080。"
    },
    {
        "id": 252,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的`devtools`依赖的作用是（ ）",
        "options": [
            {
                "id": "252-A",
                "label": "A",
                "text": "提供生产环境监控"
            },
            {
                "id": "252-B",
                "label": "B",
                "text": "实现热部署，加速开发"
            },
            {
                "id": "252-C",
                "label": "C",
                "text": "优化性能"
            },
            {
                "id": "252-D",
                "label": "D",
                "text": "处理数据库事务"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`spring-boot-devtools`提供热部署，修改代码后自动重启应用（快速重启）。"
    },
    {
        "id": 253,
        "category": "SpringBoot",
        "type": "single",
        "text": "以下哪个不是Spring Boot的Starter依赖？（ ）",
        "options": [
            {
                "id": "253-A",
                "label": "A",
                "text": "`spring-boot-starter-web`"
            },
            {
                "id": "253-B",
                "label": "B",
                "text": "`spring-boot-starter-mybatis`"
            },
            {
                "id": "253-C",
                "label": "C",
                "text": "`spring-boot-starter-logging`"
            },
            {
                "id": "253-D",
                "label": "D",
                "text": "`spring-boot-starter-servlet`"
            }
        ],
        "correctAnswer": "D",
        "explanation": "<span\r\n                class='label'>答案解析：</span>Starter是一组依赖的集合，`spring-boot-starter-web`包含Web相关依赖，无`spring-boot-starter-servlet`（servlet是Web的一部分）。"
    },
    {
        "id": 254,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot项目打包为可执行JAR的插件是（ ）",
        "options": [
            {
                "id": "254-A",
                "label": "A",
                "text": "`maven-compiler-plugin`"
            },
            {
                "id": "254-B",
                "label": "B",
                "text": "`spring-boot-maven-plugin`"
            },
            {
                "id": "254-C",
                "label": "C",
                "text": "`maven-jar-plugin`"
            },
            {
                "id": "254-D",
                "label": "D",
                "text": "`spring-boot-plugin`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`spring-boot-maven-plugin`负责将项目打包为可执行JAR，包含依赖和启动类。"
    },
    {
        "id": 255,
        "category": "SpringBoot",
        "type": "single",
        "text": "激活不同环境配置（如dev、prod）的属性是（ ）",
        "options": [
            {
                "id": "255-A",
                "label": "A",
                "text": "`spring.profile.active`"
            },
            {
                "id": "255-B",
                "label": "B",
                "text": "`spring.profiles.active`"
            },
            {
                "id": "255-C",
                "label": "C",
                "text": "`spring.environment`"
            },
            {
                "id": "255-D",
                "label": "D",
                "text": "`spring.active.profile`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>通过`spring.profiles.active=dev`激活`application-dev.properties`配置。"
    },
    {
        "id": 256,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的测试类通常使用哪个注解？（ ）",
        "options": [
            {
                "id": "256-A",
                "label": "A",
                "text": "`@Test`"
            },
            {
                "id": "256-B",
                "label": "B",
                "text": "`@SpringTest`"
            },
            {
                "id": "256-C",
                "label": "C",
                "text": "`@SpringBootTest`"
            },
            {
                "id": "256-D",
                "label": "D",
                "text": "`@BootTest`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "`@SpringBootTest`用于Spring Boot测试，会加载应用上下文，支持自动注入Bean。"
    },
    {
        "id": 257,
        "category": "SpringBoot",
        "type": "single",
        "text": "静态资源默认存放目录不包括（ ）",
        "options": [
            {
                "id": "257-A",
                "label": "A",
                "text": "`src/main/resources/static`"
            },
            {
                "id": "257-B",
                "label": "B",
                "text": "`src/main/resources/public`"
            },
            {
                "id": "257-C",
                "label": "C",
                "text": "`src/main/resources/templates`"
            },
            {
                "id": "257-D",
                "label": "D",
                "text": "`src/main/resources/resources`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`templates`是模板文件（如Thymeleaf）存放目录，静态资源目录为static、public、resources。"
    },
    {
        "id": 258,
        "category": "SpringBoot",
        "type": "single",
        "text": "`application.yaml`与`application.properties`的区别是（ ）",
        "options": [
            {
                "id": "258-A",
                "label": "A",
                "text": "语法不同，yaml用缩进，properties用`key=value`"
            },
            {
                "id": "258-B",
                "label": "B",
                "text": "优先级不同，yaml更高"
            },
            {
                "id": "258-C",
                "label": "C",
                "text": "支持的配置项不同"
            },
            {
                "id": "258-D",
                "label": "D",
                "text": "yaml只支持Spring Boot 2.x"
            }
        ],
        "correctAnswer": "A",
        "explanation": "两者功能相同，语法不同；优先级与格式无关，取决于文件位置。"
    },
    {
        "id": 259,
        "category": "SpringBoot",
        "type": "single",
        "text": "以下哪个依赖用于Spring Boot的Web开发？（ ）",
        "options": [
            {
                "id": "259-A",
                "label": "A",
                "text": "`spring-boot-starter-web`"
            },
            {
                "id": "259-B",
                "label": "B",
                "text": "`spring-boot-starter-mvc`"
            },
            {
                "id": "259-C",
                "label": "C",
                "text": "`spring-boot-starter-servlet`"
            },
            {
                "id": "259-D",
                "label": "D",
                "text": "`spring-boot-starter-tomcat`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`spring-boot-starter-web`包含Spring MVC、Tomcat等Web开发所需依赖。"
    },
    {
        "id": 260,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot应用的默认上下文路径（Context Path）是（ ）",
        "options": [
            {
                "id": "260-A",
                "label": "A",
                "text": "`/`"
            },
            {
                "id": "260-B",
                "label": "B",
                "text": "`/app`"
            },
            {
                "id": "260-C",
                "label": "C",
                "text": "`/springboot`"
            },
            {
                "id": "260-D",
                "label": "D",
                "text": "空"
            }
        ],
        "correctAnswer": "A",
        "explanation": "默认上下文路径为`/`，可通过`server.servlet.context-path=/api`修改。"
    },
    {
        "id": 261,
        "category": "SpringBoot",
        "type": "single",
        "text": "`@RestController`注解相比`@Controller`的区别是（ ）",
        "options": [
            {
                "id": "261-A",
                "label": "A",
                "text": "`@RestController`仅用于RESTful接口"
            },
            {
                "id": "261-B",
                "label": "B",
                "text": "`@RestController`包含`@ResponseBody`，返回值直接作为响应体"
            },
            {
                "id": "261-C",
                "label": "C",
                "text": "`@RestController`不支持视图解析"
            },
            {
                "id": "261-D",
                "label": "D",
                "text": "以上都对"
            }
        ],
        "correctAnswer": "D",
        "explanation": "`@RestController` = `@Controller` +\r\n              `@ResponseBody`，适合RESTful接口，返回JSON等数据，不经过视图解析。"
    },
    {
        "id": 262,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot中，关闭特定自动配置的注解属性是（ ）",
        "options": [
            {
                "id": "262-A",
                "label": "A",
                "text": "`@SpringBootApplication(exclude = XXX.class)`"
            },
            {
                "id": "262-B",
                "label": "B",
                "text": "`@EnableAutoConfiguration(exclude = XXX.class)`"
            },
            {
                "id": "262-C",
                "label": "C",
                "text": "A和B均可"
            },
            {
                "id": "262-D",
                "label": "D",
                "text": "`@DisableAutoConfiguration`"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@SpringBootApplication`包含`@EnableAutoConfiguration`，两者的`exclude`属性均可关闭特定自动配置。"
    },
    {
        "id": 263,
        "category": "SpringBoot",
        "type": "single",
        "text": "配置文件中，设置日志级别为DEBUG的属性是（ ）",
        "options": [
            {
                "id": "263-A",
                "label": "A",
                "text": "`logging.level=DEBUG`"
            },
            {
                "id": "263-B",
                "label": "B",
                "text": "`logging.level.root=DEBUG`"
            },
            {
                "id": "263-C",
                "label": "C",
                "text": "`log.level=DEBUG`"
            },
            {
                "id": "263-D",
                "label": "D",
                "text": "`spring.logging.level=DEBUG`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "<span\r\n                class='label'>答案解析：</span>通过`logging.level.root=DEBUG`设置全局日志级别，`logging.level.com.example=DEBUG`设置指定包级别。"
    },
    {
        "id": 264,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的自动配置原理中，核心配置文件是（ ）",
        "options": [
            {
                "id": "264-A",
                "label": "A",
                "text": "`META-INF/spring.factories`"
            },
            {
                "id": "264-B",
                "label": "B",
                "text": "`META-INF/spring.properties`"
            },
            {
                "id": "264-C",
                "label": "C",
                "text": "`META-INF/spring.xml`"
            },
            {
                "id": "264-D",
                "label": "D",
                "text": "`META-INF/auto-configure.properties`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`spring.factories`文件中配置了自动配置类的全类名，Spring Boot启动时扫描并加载。"
    },
    {
        "id": 265,
        "category": "SpringBoot",
        "type": "single",
        "text": "以下哪个不是Spring Boot的核心特性？（ ）",
        "options": [
            {
                "id": "265-A",
                "label": "A",
                "text": "自动配置"
            },
            {
                "id": "265-B",
                "label": "B",
                "text": "Starter依赖"
            },
            {
                "id": "265-C",
                "label": "C",
                "text": "嵌入式服务器"
            },
            {
                "id": "265-D",
                "label": "D",
                "text": "底层ORM实现"
            }
        ],
        "correctAnswer": "D",
        "explanation": "Spring Boot不提供ORM实现，需通过Starter集成MyBatis、JPA等。"
    },
    {
        "id": 266,
        "category": "SpringBoot",
        "type": "single",
        "text": "配置文件中，设置连接超时时间的属性是（ ）",
        "options": [
            {
                "id": "266-A",
                "label": "A",
                "text": "`server.connection-timeout`"
            },
            {
                "id": "266-B",
                "label": "B",
                "text": "`spring.server.timeout`"
            },
            {
                "id": "266-C",
                "label": "C",
                "text": "`tomcat.timeout`"
            },
            {
                "id": "266-D",
                "label": "D",
                "text": "`connection.timeout`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`server.connection-timeout=30000`设置连接超时时间（毫秒）。"
    },
    {
        "id": 267,
        "category": "SpringBoot",
        "type": "single",
        "text": "以下哪个注解用于标记配置类？（ ）",
        "options": [
            {
                "id": "267-A",
                "label": "A",
                "text": "`@Configuration`"
            },
            {
                "id": "267-B",
                "label": "B",
                "text": "`@Config`"
            },
            {
                "id": "267-C",
                "label": "C",
                "text": "`@BeanConfig`"
            },
            {
                "id": "267-D",
                "label": "D",
                "text": "`@SpringConfig`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@Configuration`标记类为配置类，内部可通过`@Bean`定义Bean。"
    },
    {
        "id": 268,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot中，`@Bean`注解的作用是（ ）",
        "options": [
            {
                "id": "268-A",
                "label": "A",
                "text": "标记类为组件"
            },
            {
                "id": "268-B",
                "label": "B",
                "text": "在配置类中定义Bean"
            },
            {
                "id": "268-C",
                "label": "C",
                "text": "注入Bean"
            },
            {
                "id": "268-D",
                "label": "D",
                "text": "指定Bean的作用域"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@Bean`用于配置类中，方法返回值作为Bean注册到容器中。"
    },
    {
        "id": 269,
        "category": "SpringBoot",
        "type": "single",
        "text": "外部化配置的优先级从高到低排序正确的是（ ）",
        "options": [
            {
                "id": "269-A",
                "label": "A",
                "text": "命令行参数 &gt; 系统环境变量 &gt; 配置文件"
            },
            {
                "id": "269-B",
                "label": "B",
                "text": "配置文件 &gt; 系统环境变量 &gt; 命令行参数"
            },
            {
                "id": "269-C",
                "label": "C",
                "text": "系统环境变量 &gt; 命令行参数 &gt; 配置文件"
            },
            {
                "id": "269-D",
                "label": "D",
                "text": "命令行参数 &gt; 配置文件 &gt; 系统环境变量"
            }
        ],
        "correctAnswer": "A",
        "explanation": "Spring Boot外部化配置优先级：命令行参数 &gt; 系统环境变量 &gt; 配置文件等。"
    },
    {
        "id": 270,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的`@EnableAutoConfiguration`注解的作用是（ ）",
        "options": [
            {
                "id": "270-A",
                "label": "A",
                "text": "开启自动配置"
            },
            {
                "id": "270-B",
                "label": "B",
                "text": "开启组件扫描"
            },
            {
                "id": "270-C",
                "label": "C",
                "text": "定义配置类"
            },
            {
                "id": "270-D",
                "label": "D",
                "text": "启用Web功能"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@EnableAutoConfiguration`是`@SpringBootApplication`的组成部分，负责开启自动配置。"
    },
    {
        "id": 271,
        "category": "SpringBoot",
        "type": "single",
        "text": "以下哪个依赖用于Spring Boot的测试？（ ）",
        "options": [
            {
                "id": "271-A",
                "label": "A",
                "text": "`spring-boot-starter-test`"
            },
            {
                "id": "271-B",
                "label": "B",
                "text": "`spring-test`"
            },
            {
                "id": "271-C",
                "label": "C",
                "text": "`junit`"
            },
            {
                "id": "271-D",
                "label": "D",
                "text": "`mockito`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`spring-boot-starter-test`包含JUnit、Mockito、Spring\r\n              Test等测试相关依赖。"
    },
    {
        "id": 272,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot中，默认的JSON处理器是（ ）",
        "options": [
            {
                "id": "272-A",
                "label": "A",
                "text": "Gson"
            },
            {
                "id": "272-B",
                "label": "B",
                "text": "Jackson"
            },
            {
                "id": "272-C",
                "label": "C",
                "text": "FastJSON"
            },
            {
                "id": "272-D",
                "label": "D",
                "text": "无默认，需手动配置"
            }
        ],
        "correctAnswer": "B",
        "explanation": "默认集成Jackson处理JSON，可通过排除依赖切换为Gson等。"
    },
    {
        "id": 273,
        "category": "SpringBoot",
        "type": "single",
        "text": "配置文件中，设置应用名称的属性是（ ）",
        "options": [
            {
                "id": "273-A",
                "label": "A",
                "text": "`spring.application.name`"
            },
            {
                "id": "273-B",
                "label": "B",
                "text": "`app.name`"
            },
            {
                "id": "273-C",
                "label": "C",
                "text": "`application.name`"
            },
            {
                "id": "273-D",
                "label": "D",
                "text": "`server.name`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`spring.application.name=myapp`设置应用名称，用于日志、监控等标识。"
    },
    {
        "id": 274,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的`@ComponentScan`注解的作用是（ ）",
        "options": [
            {
                "id": "274-A",
                "label": "A",
                "text": "扫描指定包下的组件（@Component、@Controller等）"
            },
            {
                "id": "274-B",
                "label": "B",
                "text": "扫描配置文件"
            },
            {
                "id": "274-C",
                "label": "C",
                "text": "扫描自动配置类"
            },
            {
                "id": "274-D",
                "label": "D",
                "text": "扫描静态资源"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@ComponentScan`指定扫描路径，默认扫描入口类所在包及子包。"
    },
    {
        "id": 275,
        "category": "SpringBoot",
        "type": "single",
        "text": "以下哪种方式不能修改Spring Boot的默认配置？（ ）",
        "options": [
            {
                "id": "275-A",
                "label": "A",
                "text": "自定义配置文件"
            },
            {
                "id": "275-B",
                "label": "B",
                "text": "自定义自动配置类覆盖默认Bean"
            },
            {
                "id": "275-C",
                "label": "C",
                "text": "使用`@DisableAutoConfiguration`注解"
            },
            {
                "id": "275-D",
                "label": "D",
                "text": "命令行参数"
            }
        ],
        "correctAnswer": "C",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@DisableAutoConfiguration`会禁用所有自动配置，不符合“修改默认配置”的需求；应针对性排除。"
    },
    {
        "id": 276,
        "category": "SpringBoot",
        "type": "single",
        "text": "Spring Boot的`Banner`（启动标语）可通过哪个属性关闭？（ ）",
        "options": [
            {
                "id": "276-A",
                "label": "A",
                "text": "`spring.banner.enabled=false`"
            },
            {
                "id": "276-B",
                "label": "B",
                "text": "`banner.enabled=false`"
            },
            {
                "id": "276-C",
                "label": "C",
                "text": "`spring.boot.banner=false`"
            },
            {
                "id": "276-D",
                "label": "D",
                "text": "`server.banner=false`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`spring.banner.enabled=false`关闭启动时的Banner标语。"
    },
    {
        "id": 277,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot的核心特点是“约定优于配置”，可简化Spring应用的搭建和开发。",
        "options": [
            {
                "id": "277-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "277-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 278,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "创建Spring Boot项目时，必须手动导入所有依赖包。（ ）",
        "options": [
            {
                "id": "278-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "278-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "可通过Spring Initializr自动导入所需依赖或在pom.xml中配置依赖坐标"
    },
    {
        "id": 279,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring\r\n                Boot应用的入口类需添加`@SpringBootApplication`注解，该注解包含了`@SpringBootConfiguration`、`@EnableAutoConfiguration`和`@ComponentScan`。（ ）",
        "options": [
            {
                "id": "279-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "279-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 280,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot默认内置了Tomcat服务器，无需额外配置即可运行Web应用。（ ）",
        "options": [
            {
                "id": "280-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "280-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 281,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot的`application.properties`配置文件只能放在src/main/resources目录下。（ ）",
        "options": [
            {
                "id": "281-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "281-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "还可放在src/main/resources/config目录、类路径根目录等位置且优先级不同"
    },
    {
        "id": 282,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot中，使用`@Value`注解可以读取配置文件中的属性值。（ ）",
        "options": [
            {
                "id": "282-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "282-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 283,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot默认支持RESTful风格的接口开发。（ ）",
        "options": [
            {
                "id": "283-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "283-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 284,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "创建Spring Boot Web项目时，必须手动配置DispatcherServlet。（ ）",
        "options": [
            {
                "id": "284-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "284-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "Spring Boot自动配置DispatcherServlet无需手动配置"
    },
    {
        "id": 285,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot应用打包成JAR包后，无法直接运行，需部署到外部服务器。（ ）",
        "options": [
            {
                "id": "285-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "285-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "JAR包内置服务器可通过`java -jar`命令直接运行"
    },
    {
        "id": 286,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "MyBatis 的 ` ` 标签用于定义可重用的 SQL 片段，通过 ` ` 标签引入使用。（ ）",
        "options": [
            {
                "id": "286-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "286-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 287,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "动态 SQL 中的 ` ` 标签可以自动去除其内部 SQL 语句开头的多余 AND 或 OR 关键字。（ ）",
        "options": [
            {
                "id": "287-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "287-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 288,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "` ` 标签用于在插入数据时获取非自增主键的值，支持前置和后置获取两种方式。（ ）",
        "options": [
            {
                "id": "288-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "288-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 289,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "MyBatis 的 Mapper 接口是通过 JDK 动态代理生成实现类的，无需手动编写实现代码。（ ）",
        "options": [
            {
                "id": "289-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "289-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 290,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "动态 SQL 中的 ` ` 标签常用于遍历集合参数，生成 IN 条件语句或批量插入语句。（ ）",
        "options": [
            {
                "id": "290-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "290-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 291,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "MyBatis 的二级缓存是 Mapper 级别的缓存，多个 SqlSession 可共享同一 Mapper 的缓存数据。（ ）",
        "options": [
            {
                "id": "291-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "291-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 292,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "` ` 中的 ` ` 标签用于指定主键字段，MyBatis 会根据主键进行结果去重处理。（ ）",
        "options": [
            {
                "id": "292-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "292-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 293,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "MyBatis 被称为半自动 ORM 框架，是因为其查询关联对象时需要手动编写 SQL 语句。（ ）",
        "options": [
            {
                "id": "293-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "293-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 294,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "动态 SQL 的执行原理是通过 OGNL 表达式计算参数值，根据结果动态拼接 SQL 语句。（ ）",
        "options": [
            {
                "id": "294-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "294-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 295,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "MyBatis 中，`SqlSessionFactory` 是线程安全的，而 `SqlSession` 是非线程安全的。（ ）",
        "options": [
            {
                "id": "295-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "295-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 296,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "MyBatis的` ` 标签在更新操作中使用，可自动去除 SQL 语句末尾多余的逗号。（ ）",
        "options": [
            {
                "id": "296-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "296-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 297,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "MyBatis 的 `mapper` 配置文件中，`namespace` 属性的值必须与对应的 Mapper 接口的全类名一致。（ ）",
        "options": [
            {
                "id": "297-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "297-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 298,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "二级缓存需要实体类实现 `Serializable` 接口，否则无法进行序列化存储。（ ）",
        "options": [
            {
                "id": "298-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "298-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 299,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "动态 SQL 中的 ` `、` `、` ` 标签组合使用，相当于 Java 中的 if-else if-else 逻辑。（ ）",
        "options": [
            {
                "id": "299-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "299-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 300,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "使用 `@Mapper` 注解标注 Mapper 接口，可替代在核心配置文件中配置 ` ` 标签。（ ）",
        "options": [
            {
                "id": "300-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "300-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 301,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "MyBatis 的一级缓存默认开启，当 SqlSession 关闭后，一级缓存中的数据会被清除。（ ）",
        "options": [
            {
                "id": "301-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "301-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 302,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Initializr 是创建 Spring Boot 项目的常用工具，支持通过网页、IDEA 等多种方式使用。（ ）",
        "options": [
            {
                "id": "302-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "302-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 303,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 项目的 `pom.xml` 中，`spring-boot-starter-parent` 作为父依赖，提供了统一的依赖版本管理。（ ）",
        "options": [
            {
                "id": "303-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "303-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 304,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "`application.yml` 配置文件采用缩进表示层级关系，相比 `application.properties` 更易读。（ ）",
        "options": [
            {
                "id": "304-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "304-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 305,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 支持通过 `spring.profiles.active` 配置激活不同环境的配置文件，如 dev、test、prod。（ ）",
        "options": [
            {
                "id": "305-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "305-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 306,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "使用 `@SpringBootTest` 注解可以进行 Spring Boot 应用的单元测试和集成测试。（ ）",
        "options": [
            {
                "id": "306-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "306-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 307,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 项目打包为 WAR 包时，需在入口类中继承 `SpringBootServletInitializer` 并重写 `configure`\r\n                方法。（ ）",
        "options": [
            {
                "id": "307-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "307-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 308,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "`@ConfigurationProperties` 注解可以将配置文件中的属性批量绑定到实体类对象中。（ ）",
        "options": [
            {
                "id": "308-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "308-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 309,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 默认的服务器端口是 8080，可通过 `server.port` 配置修改。（ ）",
        "options": [
            {
                "id": "309-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "309-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 310,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "启动 Spring Boot 应用时，通过 `--spring.profiles.active=dev` 命令行参数可指定激活 dev 环境配置。（ ）",
        "options": [
            {
                "id": "310-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "310-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 311,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 的 `spring-boot-devtools` 依赖提供了热部署功能，可加速开发过程。（ ）",
        "options": [
            {
                "id": "311-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "311-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 312,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 项目中，静态资源默认存放于 `src/main/resources/static`、`public`、`resources` 目录下。（ ）",
        "options": [
            {
                "id": "312-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "312-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 313,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "`application.properties` 中，配置属性的键名不区分大小写，如 `server.port` 和 `SERVER.PORT` 效果相同。（ ）",
        "options": [
            {
                "id": "313-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "313-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 314,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "使用 `spring-boot-maven-plugin` 插件可以将 Spring Boot 项目打包为可执行 JAR 包。（ ）",
        "options": [
            {
                "id": "314-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "314-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 315,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 自动配置的本质是根据类路径下的依赖自动注册对应的 Bean。（ ）",
        "options": [
            {
                "id": "315-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "315-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 316,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 应用可通过 `SpringApplication.run(Application.class, args)` 方法启动。（ ）",
        "options": [
            {
                "id": "316-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "316-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 317,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "不同位置的配置文件优先级不同，`src/main/resources/config` 目录下的配置文件优先级高于 `src/main/resources`\r\n                目录。（ ）",
        "options": [
            {
                "id": "317-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "317-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 318,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "Spring Boot 支持通过 `logging.level.root` 配置全局日志级别，如 DEBUG、INFO、ERROR。（ ）",
        "options": [
            {
                "id": "318-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "318-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 319,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "创建 Spring Boot Web 项目时，引入 `spring-boot-starter-web` 依赖即可自动集成 Spring MVC 和\r\n                Tomcat。（ ）",
        "options": [
            {
                "id": "319-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "319-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 320,
        "category": "SpringBoot",
        "type": "boolean",
        "text": "`@RestController` 注解是 `@Controller` 和 `@ResponseBody` 注解的组合。（ ）",
        "options": [
            {
                "id": "320-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "320-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 321,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@ConditionalOnClass`注解的作用是（ ）",
        "options": [
            {
                "id": "321-A",
                "label": "A",
                "text": "当类路径下存在指定类时，才生效配置"
            },
            {
                "id": "321-B",
                "label": "B",
                "text": "当容器中存在指定Bean时，才生效配置"
            },
            {
                "id": "321-C",
                "label": "C",
                "text": "当类路径下不存在指定类时，才生效配置"
            },
            {
                "id": "321-D",
                "label": "D",
                "text": "当配置文件中存在指定属性时，才生效配置"
            }
        ],
        "correctAnswer": "T",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@ConditionalOnClass(DataSource.class)`表示类路径有`DataSource`时，配置生效。"
    },
    {
        "id": 322,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot Actuator的作用是（ ）",
        "options": [
            {
                "id": "322-A",
                "label": "A",
                "text": "自动配置应用"
            },
            {
                "id": "322-B",
                "label": "B",
                "text": "监控和管理应用"
            },
            {
                "id": "322-C",
                "label": "C",
                "text": "处理HTTP请求"
            },
            {
                "id": "322-D",
                "label": "D",
                "text": "优化应用性能"
            }
        ],
        "correctAnswer": "B",
        "explanation": "Actuator提供端点（如`/health`、`/info`）用于监控应用健康、指标等。"
    },
    {
        "id": 323,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@ConditionalOnMissingBean`注解的作用是（ ）",
        "options": [
            {
                "id": "323-A",
                "label": "A",
                "text": "当容器中存在指定Bean时，才注册当前Bean"
            },
            {
                "id": "323-B",
                "label": "B",
                "text": "当容器中不存在指定Bean时，才注册当前Bean"
            },
            {
                "id": "323-C",
                "label": "C",
                "text": "忽略指定Bean的注册"
            },
            {
                "id": "323-D",
                "label": "D",
                "text": "强制注册指定Bean"
            }
        ],
        "correctAnswer": "B",
        "explanation": "用于自动配置中，确保用户自定义Bean优先于默认Bean（用户定义后，默认Bean不注册）。"
    },
    {
        "id": 324,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot 2.x默认使用的数据源是（ ）",
        "options": [
            {
                "id": "324-A",
                "label": "A",
                "text": "DBCP2"
            },
            {
                "id": "324-B",
                "label": "B",
                "text": "C3P0"
            },
            {
                "id": "324-C",
                "label": "C",
                "text": "HikariCP"
            },
            {
                "id": "324-D",
                "label": "D",
                "text": "Tomcat JDBC"
            }
        ],
        "correctAnswer": "C",
        "explanation": "Spring Boot 2.x默认使用HikariCP，性能优于传统数据源。"
    },
    {
        "id": 325,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot整合MyBatis时，需引入的Starter依赖是（ ）",
        "options": [
            {
                "id": "325-A",
                "label": "A",
                "text": "`mybatis-spring-boot-starter`"
            },
            {
                "id": "325-B",
                "label": "B",
                "text": "`spring-boot-starter-mybatis`"
            },
            {
                "id": "325-C",
                "label": "C",
                "text": "`mybatis-spring-starter`"
            },
            {
                "id": "325-D",
                "label": "D",
                "text": "`spring-mybatis-boot-starter`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "官方Starter为`mybatis-spring-boot-starter`，提供自动配置。"
    },
    {
        "id": 326,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@ConditionalOnProperty`注解的作用是（ ）",
        "options": [
            {
                "id": "326-A",
                "label": "A",
                "text": "当指定属性存在且值匹配时，配置生效"
            },
            {
                "id": "326-B",
                "label": "B",
                "text": "当指定属性不存在时，配置生效"
            },
            {
                "id": "326-C",
                "label": "C",
                "text": "忽略指定属性"
            },
            {
                "id": "326-D",
                "label": "D",
                "text": "强制设置属性值"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@ConditionalOnProperty(name =\r\n              &quot;spring.datasource.enabled&quot;, havingValue = &quot;true&quot;)`表示属性匹配时生效。"
    },
    {
        "id": 327,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Actuator的端点路径默认前缀是（ ）",
        "options": [
            {
                "id": "327-A",
                "label": "A",
                "text": "`/actuator`"
            },
            {
                "id": "327-B",
                "label": "B",
                "text": "`/monitor`"
            },
            {
                "id": "327-C",
                "label": "C",
                "text": "`/health`"
            },
            {
                "id": "327-D",
                "label": "D",
                "text": "无前缀"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>默认端点路径为`/actuator/health`、`/actuator/info`等，可通过`management.endpoints.web.base-path`修改。"
    },
    {
        "id": 328,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@SpringBootConfiguration`注解的本质是（ ）",
        "options": [
            {
                "id": "328-A",
                "label": "A",
                "text": "`@Configuration`"
            },
            {
                "id": "328-B",
                "label": "B",
                "text": "`@Component`"
            },
            {
                "id": "328-C",
                "label": "C",
                "text": "`@EnableAutoConfiguration`"
            },
            {
                "id": "328-D",
                "label": "D",
                "text": "`@ComponentScan`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@SpringBootConfiguration`是`@Configuration`的特殊形式，标识当前类为Spring Boot配置类。"
    },
    {
        "id": 329,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@ConditionalOnWebApplication`注解的作用是（ ）",
        "options": [
            {
                "id": "329-A",
                "label": "A",
                "text": "当应用是Web应用时，配置生效"
            },
            {
                "id": "329-B",
                "label": "B",
                "text": "当应用是非Web应用时，配置生效"
            },
            {
                "id": "329-C",
                "label": "C",
                "text": "配置Web应用的参数"
            },
            {
                "id": "329-D",
                "label": "D",
                "text": "禁用Web应用自动配置"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>用于Web相关自动配置（如`DispatcherServletAutoConfiguration`），仅在Web应用中生效。"
    },
    {
        "id": 330,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot的`DataSourceAutoConfiguration`的作用是（ ）",
        "options": [
            {
                "id": "330-A",
                "label": "A",
                "text": "自动配置数据源"
            },
            {
                "id": "330-B",
                "label": "B",
                "text": "自动配置事务管理器"
            },
            {
                "id": "330-C",
                "label": "C",
                "text": "自动配置JPA"
            },
            {
                "id": "330-D",
                "label": "D",
                "text": "自动配置MyBatis"
            }
        ],
        "correctAnswer": "A",
        "explanation": "根据类路径下的驱动和配置（`spring.datasource.*`）自动配置数据源。"
    },
    {
        "id": 331,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@EnableConfigurationProperties`注解的作用是（ ）",
        "options": [
            {
                "id": "331-A",
                "label": "A",
                "text": "开启`@ConfigurationProperties`注解的支持"
            },
            {
                "id": "331-B",
                "label": "B",
                "text": "定义配置属性"
            },
            {
                "id": "331-C",
                "label": "C",
                "text": "加载配置文件"
            },
            {
                "id": "331-D",
                "label": "D",
                "text": "覆盖默认配置"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>需配合`@ConfigurationProperties`使用，使属性绑定生效（如`@EnableConfigurationProperties(UserProperties.class)`）。"
    },
    {
        "id": 332,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@ConditionalOnMissingClass`注解的作用是（ ）",
        "options": [
            {
                "id": "332-A",
                "label": "A",
                "text": "当类路径下存在指定类时，配置生效"
            },
            {
                "id": "332-B",
                "label": "B",
                "text": "当类路径下不存在指定类时，配置生效"
            },
            {
                "id": "332-C",
                "label": "C",
                "text": "当容器中不存在指定Bean时，配置生效"
            },
            {
                "id": "332-D",
                "label": "D",
                "text": "忽略指定类"
            }
        ],
        "correctAnswer": "B",
        "explanation": "与`@ConditionalOnClass`相反，类路径无指定类时配置生效。"
    },
    {
        "id": 333,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot整合Spring Data JPA时，需引入的Starter依赖是（ ）",
        "options": [
            {
                "id": "333-A",
                "label": "A",
                "text": "`spring-boot-starter-data-jpa`"
            },
            {
                "id": "333-B",
                "label": "B",
                "text": "`jpa-spring-boot-starter`"
            },
            {
                "id": "333-C",
                "label": "C",
                "text": "`spring-data-jpa-starter`"
            },
            {
                "id": "333-D",
                "label": "D",
                "text": "`spring-jpa-boot-starter`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "官方Starter为`spring-boot-starter-data-jpa`，自动配置JPA相关Bean。"
    },
    {
        "id": 334,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@ConditionalOnExpression`注解的作用是（ ）",
        "options": [
            {
                "id": "334-A",
                "label": "A",
                "text": "通过SpEL表达式判断是否生效配置"
            },
            {
                "id": "334-B",
                "label": "B",
                "text": "通过正则表达式判断是否生效配置"
            },
            {
                "id": "334-C",
                "label": "C",
                "text": "通过SQL表达式判断是否生效配置"
            },
            {
                "id": "334-D",
                "label": "D",
                "text": "通过EL表达式判断是否生效配置"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@ConditionalOnExpression(&quot;${spring.cache.enabled:true} &amp;&amp;\r\n              &#x27;${spring.cache.type}&#x27; != &#x27;none&#x27;&quot;)`通过SpEL表达式判断。"
    },
    {
        "id": 335,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot的自动配置类通常位于哪个依赖中？（ ）",
        "options": [
            {
                "id": "335-A",
                "label": "A",
                "text": "`spring-boot-starter`"
            },
            {
                "id": "335-B",
                "label": "B",
                "text": "`spring-boot-autoconfigure`"
            },
            {
                "id": "335-C",
                "label": "C",
                "text": "`spring-boot`"
            },
            {
                "id": "335-D",
                "label": "D",
                "text": "`spring-core`"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`spring-boot-autoconfigure`包含大部分自动配置类，是核心依赖。"
    },
    {
        "id": 336,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@AutoConfigureOrder`注解的作用是（ ）",
        "options": [
            {
                "id": "336-A",
                "label": "A",
                "text": "指定自动配置类的加载顺序（值越小越先加载）"
            },
            {
                "id": "336-B",
                "label": "B",
                "text": "指定自动配置类的优先级（值越大越优先）"
            },
            {
                "id": "336-C",
                "label": "C",
                "text": "禁用自动配置类的排序"
            },
            {
                "id": "336-D",
                "label": "D",
                "text": "标记自动配置类为主要配置"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE)`指定配置类优先加载。"
    },
    {
        "id": 337,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@ConfigurationProperties`的`prefix`属性的作用是（ ）",
        "options": [
            {
                "id": "337-A",
                "label": "A",
                "text": "指定配置文件的路径"
            },
            {
                "id": "337-B",
                "label": "B",
                "text": "指定属性的前缀，用于批量绑定"
            },
            {
                "id": "337-C",
                "label": "C",
                "text": "指定Bean的名称前缀"
            },
            {
                "id": "337-D",
                "label": "D",
                "text": "指定扫描包的前缀"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`@ConfigurationProperties(prefix =\r\n              &quot;user&quot;)`绑定`user.name`、`user.age`等属性到实体类。"
    },
    {
        "id": 338,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@Conditional`注解的作用是（ ）",
        "options": [
            {
                "id": "338-A",
                "label": "A",
                "text": "自定义条件判断，决定配置是否生效"
            },
            {
                "id": "338-B",
                "label": "B",
                "text": "强制配置生效"
            },
            {
                "id": "338-C",
                "label": "C",
                "text": "禁用配置"
            },
            {
                "id": "338-D",
                "label": "D",
                "text": "标记配置类"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@Conditional(MyCondition.class)`，`MyCondition`实现`Condition`接口，自定义判断逻辑。"
    },
    {
        "id": 339,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot整合Redis时，需引入的Starter依赖是（ ）",
        "options": [
            {
                "id": "339-A",
                "label": "A",
                "text": "`spring-boot-starter-data-redis`"
            },
            {
                "id": "339-B",
                "label": "B",
                "text": "`redis-spring-boot-starter`"
            },
            {
                "id": "339-C",
                "label": "C",
                "text": "`spring-redis-boot-starter`"
            },
            {
                "id": "339-D",
                "label": "D",
                "text": "`spring-data-redis-starter`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>官方Starter为`spring-boot-starter-data-redis`，自动配置`RedisTemplate`等。"
    },
    {
        "id": 340,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "自动配置类的命名规范通常是（ ）",
        "options": [
            {
                "id": "340-A",
                "label": "A",
                "text": "`XxxAutoConfiguration`"
            },
            {
                "id": "340-B",
                "label": "B",
                "text": "`AutoConfigurationXxx`"
            },
            {
                "id": "340-C",
                "label": "C",
                "text": "`XxxConfiguration`"
            },
            {
                "id": "340-D",
                "label": "D",
                "text": "`ConfigurationXxx`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>自动配置类通常以`XxxAutoConfiguration`命名（如`DataSourceAutoConfiguration`）。"
    },
    {
        "id": 341,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@ConditionalOnResource`注解的作用是（ ）",
        "options": [
            {
                "id": "341-A",
                "label": "A",
                "text": "当指定资源存在时，配置生效"
            },
            {
                "id": "341-B",
                "label": "B",
                "text": "当指定资源不存在时，配置生效"
            },
            {
                "id": "341-C",
                "label": "C",
                "text": "加载指定资源"
            },
            {
                "id": "341-D",
                "label": "D",
                "text": "忽略指定资源"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@ConditionalOnResource(resources =\r\n              &quot;classpath:application-dev.properties&quot;)`表示资源存在时生效。"
    },
    {
        "id": 342,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot中，配置Jackson日期格式的属性是（ ）",
        "options": [
            {
                "id": "342-A",
                "label": "A",
                "text": "`spring.jackson.date-format=yyyy-MM-dd HH:mm:ss`"
            },
            {
                "id": "342-B",
                "label": "B",
                "text": "`jackson.date-format=yyyy-MM-dd HH:mm:ss`"
            },
            {
                "id": "342-C",
                "label": "C",
                "text": "`spring.date-format=yyyy-MM-dd HH:mm:ss`"
            },
            {
                "id": "342-D",
                "label": "D",
                "text": "`date-format=yyyy-MM-dd HH:mm:ss`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "通过`spring.jackson.date-format`配置JSON日期序列化格式。"
    },
    {
        "id": 343,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "`@EnableAutoConfiguration`注解的`excludeName`属性用于（ ）",
        "options": [
            {
                "id": "343-A",
                "label": "A",
                "text": "排除指定类名的自动配置类（全类名字符串）"
            },
            {
                "id": "343-B",
                "label": "B",
                "text": "排除指定类型的自动配置类"
            },
            {
                "id": "343-C",
                "label": "C",
                "text": "包含指定自动配置类"
            },
            {
                "id": "343-D",
                "label": "D",
                "text": "重命名自动配置类"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`exclude`接收Class对象，`excludeName`接收全类名字符串（如`excludeName =\r\n              &quot;org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration&quot;`）。"
    },
    {
        "id": 344,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Actuator的`/shutdown`端点的作用是（ ）",
        "options": [
            {
                "id": "344-A",
                "label": "A",
                "text": "查看应用状态"
            },
            {
                "id": "344-B",
                "label": "B",
                "text": "关闭应用（需POST请求）"
            },
            {
                "id": "344-C",
                "label": "C",
                "text": "重启应用"
            },
            {
                "id": "344-D",
                "label": "D",
                "text": "清理缓存"
            }
        ],
        "correctAnswer": "B",
        "explanation": "`/shutdown`默认关闭，开启后通过POST请求可优雅关闭应用。"
    },
    {
        "id": 345,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot的`@Bean`方法的`initMethod`和`destroyMethod`属性的作用是（ ）",
        "options": [
            {
                "id": "345-A",
                "label": "A",
                "text": "指定Bean的初始化和销毁方法"
            },
            {
                "id": "345-B",
                "label": "B",
                "text": "指定Bean的作用域"
            },
            {
                "id": "345-C",
                "label": "C",
                "text": "指定Bean的依赖"
            },
            {
                "id": "345-D",
                "label": "D",
                "text": "指定Bean的名称"
            }
        ],
        "correctAnswer": "A",
        "explanation": "`@Bean(initMethod = &quot;init&quot;, destroyMethod =\r\n              &quot;destroy&quot;)`指定初始化和销毁方法。"
    },
    {
        "id": 346,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "整合Thymeleaf模板引擎时，需引入的Starter依赖是（ ）",
        "options": [
            {
                "id": "346-A",
                "label": "A",
                "text": "`spring-boot-starter-thymeleaf`"
            },
            {
                "id": "346-B",
                "label": "B",
                "text": "`thymeleaf-spring-boot-starter`"
            },
            {
                "id": "346-C",
                "label": "C",
                "text": "`spring-thymeleaf-boot-starter`"
            },
            {
                "id": "346-D",
                "label": "D",
                "text": "`thymeleaf-starter`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "官方Starter为`spring-boot-starter-thymeleaf`，自动配置Thymeleaf。"
    },
    {
        "id": 347,
        "category": "SpringBoot核心",
        "type": "single",
        "text": "Spring Boot 2.x中，配置应用类型为非Web应用的属性是（ ）",
        "options": [
            {
                "id": "347-A",
                "label": "A",
                "text": "`spring.main.web-application-type=none`"
            },
            {
                "id": "347-B",
                "label": "B",
                "text": "`spring.web.enabled=false`"
            },
            {
                "id": "347-C",
                "label": "C",
                "text": "`server.enabled=false`"
            },
            {
                "id": "347-D",
                "label": "D",
                "text": "`spring.application.type=non-web`"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`web-application-type`可选值：`SERVLET`（默认）、`REACTIVE`、`none`（非Web）。"
    },
    {
        "id": 348,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring\r\n                Boot的自动配置（AutoConfiguration）是通过扫描classpath下的META-INF/spring.factories文件实现的。",
        "options": [
            {
                "id": "348-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "348-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 349,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "在Spring Boot中，若需禁用某个自动配置类，可使用`@SpringBootApplication`注解的`exclude`属性。（ ）",
        "options": [
            {
                "id": "349-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "349-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 350,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot的Starter依赖（如spring-boot-starter-web）是一组相关依赖的集合，可简化依赖管理。",
        "options": [
            {
                "id": "350-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "350-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 351,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot中，使用`@Configuration`和`@Bean`注解可以替代XML配置，实现Bean的定义。（ ）",
        "options": [
            {
                "id": "351-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "351-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 352,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot Actuator可以监控和管理Spring Boot应用，默认开启所有监控端点。（ ）",
        "options": [
            {
                "id": "352-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "352-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "默认只开启/health和/info端点其他端点需手动配置开启"
    },
    {
        "id": 353,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot支持多种配置文件格式，包括properties、yaml和yml，其中yaml格式的配置文件优先级最高。（ ）",
        "options": [
            {
                "id": "353-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "353-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "配置文件优先级与格式无关与文件位置和加载顺序有关"
    },
    {
        "id": 354,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "在Spring Boot中，使用`@RestController`注解的类，其方法返回值默认会被转换为JSON格式。（ ）",
        "options": [
            {
                "id": "354-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "354-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": "<span\r\n                class='label'>答案解析：</span>`@RestController`包含`@Controller`和`@ResponseBody`，`@ResponseBody`指定返回值为响应体，默认转JSON"
    },
    {
        "id": 355,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot的外部化配置中，命令行参数的优先级高于配置文件的优先级。（ ）",
        "options": [
            {
                "id": "355-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "355-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 356,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot中，整合MyBatis时，必须手动配置SqlSessionFactory和SqlSessionTemplate。（ ）",
        "options": [
            {
                "id": "356-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "356-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "通过mybatis-spring-boot-starter依赖可实现自动配置无需手动配置"
    },
    {
        "id": 357,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot 2.x版本默认使用的ORM框架是JPA，而非MyBatis。（ ）",
        "options": [
            {
                "id": "357-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "357-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "B",
        "explanation": "Spring Boot默认不强制指定ORM框架JPA和MyBatis需通过对应Starter依赖引入后使用"
    },
    {
        "id": 358,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot 的自动配置类通常位于 `spring-boot-autoconfigure` 依赖的 `META-INF/spring.factories`\r\n                文件中。（ ）",
        "options": [
            {
                "id": "358-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "358-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 359,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "`@ConditionalOnClass` 注解表示当类路径下存在指定类时，才会生效对应的自动配置。（ ）",
        "options": [
            {
                "id": "359-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "359-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 360,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot 整合 MyBatis 时，引入 `mybatis-spring-boot-starter` 依赖即可实现自动配置。（ ）",
        "options": [
            {
                "id": "360-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "360-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 361,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot外部化配置中，系统环境变量的优先级高于配置文件的优先级。（ ）",
        "options": [
            {
                "id": "361-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "361-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 362,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "`@EnableAutoConfiguration` 注解用于开启 Spring Boot 的自动配置功能。（ ）",
        "options": [
            {
                "id": "362-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "362-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 363,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "`@ConditionalOnWebApplication` 注解表示当应用是 Web 应用时，自动配置才会生效。（ ）",
        "options": [
            {
                "id": "363-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "363-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 364,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot 2.x 中，默认使用 HikariCP 作为数据源，相比传统数据源性能更优。（ ）",
        "options": [
            {
                "id": "364-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "364-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 365,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "自动配置类可以通过 `@AutoConfigureAfter` 注解指定在某个配置类之后加载。（ ）",
        "options": [
            {
                "id": "365-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "365-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 366,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot 中，可通过 `spring.datasource` 前缀配置数据源的 URL、用户名、密码等信息。（ ）",
        "options": [
            {
                "id": "366-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "366-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 367,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "`@ComponentScan` 注解用于扫描指定包下的组件（如 @Component、@Controller、@Service 等）。",
        "options": [
            {
                "id": "367-A",
                "label": "A",
                "text": "对"
            },
            {
                "id": "367-B",
                "label": "B",
                "text": "错"
            }
        ],
        "correctAnswer": "",
        "explanation": ""
    },
    {
        "id": 368,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot Actuator 需引入 `spring-boot-starter-actuator` 依赖才能使用。（ ）",
        "options": [
            {
                "id": "368-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "368-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 369,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "`@SpringBootConfiguration` 注解本质上是 `@Configuration` 注解的特殊形式，标识当前类为配置类。（ ）",
        "options": [
            {
                "id": "369-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "369-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 370,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "整合 Spring Data JPA 时，引入 `spring-boot-starter-data-jpa` 依赖即可实现自动配置。（ ）",
        "options": [
            {
                "id": "370-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "370-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 371,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "`@ConditionalOnProperty` 注解表示当配置文件中存在指定属性且值匹配时，自动配置才会生效。（ ）",
        "options": [
            {
                "id": "371-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "371-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    },
    {
        "id": 372,
        "category": "SpringBoot核心",
        "type": "boolean",
        "text": "Spring Boot 支持通过 `spring.jackson.date-format` 配置 JSON 格式日期的序列化方式。（ ）",
        "options": [
            {
                "id": "372-A",
                "label": "A",
                "text": "正确"
            },
            {
                "id": "372-B",
                "label": "B",
                "text": "错误"
            }
        ],
        "correctAnswer": "A",
        "explanation": ""
    }
];

export const CATEGORIES = ["All","Spring","SpringMVC","MyBatis","SpringBoot","SpringBoot核心"];
