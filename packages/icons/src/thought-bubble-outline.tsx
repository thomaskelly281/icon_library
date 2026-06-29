import { mdiThoughtBubbleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThoughtBubbleOutline(props: IconComponentProps) {
  return <Icon path={mdiThoughtBubbleOutline} {...props} />;
}

export { mdiThoughtBubbleOutline as path };
