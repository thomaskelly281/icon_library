import { mdiThoughtBubble } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThoughtBubble(props: IconComponentProps) {
  return <Icon path={mdiThoughtBubble} {...props} />;
}

export { mdiThoughtBubble as path };
