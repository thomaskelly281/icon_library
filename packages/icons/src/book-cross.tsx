import { mdiBookCross } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookCross(props: IconComponentProps) {
  return <Icon path={mdiBookCross} {...props} />;
}

export { mdiBookCross as path };
