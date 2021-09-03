
export interface ConsultaPaginada {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        Usuario[];
  support:     Support;
}

export interface Usuario{
  avatar:     string;
  email:      string;
  first_name: string;
  id:         string;
  last_name:  string;

}

export interface Support {
  url:  string;
  text: string;
}
