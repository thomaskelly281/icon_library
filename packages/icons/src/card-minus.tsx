import { mdiCardMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardMinus(props: IconComponentProps) {
  return <Icon path={mdiCardMinus} {...props} />;
}

export { mdiCardMinus as path };
