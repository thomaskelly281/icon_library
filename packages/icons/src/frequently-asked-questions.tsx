import { mdiFrequentlyAskedQuestions } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FrequentlyAskedQuestions(props: IconComponentProps) {
  return <Icon path={mdiFrequentlyAskedQuestions} {...props} />;
}

export { mdiFrequentlyAskedQuestions as path };
