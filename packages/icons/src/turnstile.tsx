import { mdiTurnstile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Turnstile(props: IconComponentProps) {
  return <Icon path={mdiTurnstile} {...props} />;
}

export { mdiTurnstile as path };
