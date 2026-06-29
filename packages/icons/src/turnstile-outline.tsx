import { mdiTurnstileOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TurnstileOutline(props: IconComponentProps) {
  return <Icon path={mdiTurnstileOutline} {...props} />;
}

export { mdiTurnstileOutline as path };
