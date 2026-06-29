import { mdiGoodreads } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Goodreads(props: IconComponentProps) {
  return <Icon path={mdiGoodreads} {...props} />;
}

export { mdiGoodreads as path };
