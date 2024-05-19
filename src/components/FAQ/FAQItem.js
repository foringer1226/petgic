import {useCollapse} from "react-collapsed";

export default function FAQItem({ faq }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div>
            <button {...getToggleProps()} className="faq--question">
                {faq.question}
            </button>
            <section {...getCollapseProps()} className={`faq--answer ${isExpanded ? 'expanded' : ''}`}>
                {faq.answer}
            </section>
        </div>
    );
}