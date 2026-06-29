import { mdiFileDocumentArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentArrowRightOutline} {...props} />;
}

export { mdiFileDocumentArrowRightOutline as path };
