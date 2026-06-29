import { mdiCardBulleted } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardBulleted(props: IconComponentProps) {
  return <Icon path={mdiCardBulleted} {...props} />;
}

export { mdiCardBulleted as path };
