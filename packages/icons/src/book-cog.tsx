import { mdiBookCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookCog(props: IconComponentProps) {
  return <Icon path={mdiBookCog} {...props} />;
}

export { mdiBookCog as path };
