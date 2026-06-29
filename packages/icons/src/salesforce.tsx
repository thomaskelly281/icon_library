import { mdiSalesforce } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Salesforce(props: IconComponentProps) {
  return <Icon path={mdiSalesforce} {...props} />;
}

export { mdiSalesforce as path };
