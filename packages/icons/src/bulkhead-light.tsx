import { mdiBulkheadLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BulkheadLight(props: IconComponentProps) {
  return <Icon path={mdiBulkheadLight} {...props} />;
}

export { mdiBulkheadLight as path };
