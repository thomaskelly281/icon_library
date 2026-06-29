import { mdiApplicationParenthesesOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationParenthesesOutline(props: IconComponentProps) {
  return <Icon path={mdiApplicationParenthesesOutline} {...props} />;
}

export { mdiApplicationParenthesesOutline as path };
