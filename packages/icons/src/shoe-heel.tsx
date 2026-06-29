import { mdiShoeHeel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoeHeel(props: IconComponentProps) {
  return <Icon path={mdiShoeHeel} {...props} />;
}

export { mdiShoeHeel as path };
