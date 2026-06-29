import { mdiAlphaSCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaSCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiAlphaSCircleOutline} {...props} />;
}

export { mdiAlphaSCircleOutline as path };
