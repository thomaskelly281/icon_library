import { mdiSynagogueOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SynagogueOutline(props: IconComponentProps) {
  return <Icon path={mdiSynagogueOutline} {...props} />;
}

export { mdiSynagogueOutline as path };
